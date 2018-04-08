// @flow

import {
  withState,
  lifecycle,
  withHandlers,
  compose,
} from 'recompose';
import debounce from 'lodash/debounce';

const DESKTOP_BREAKPOINT: number = 768;

function calcIsMobile(windowWidth: number, breakpoint: number): boolean {
  return windowWidth < breakpoint;
}

export default (breakpoint: number = DESKTOP_BREAKPOINT): Function => compose(
  withState('isMobile', 'setIsMobile', calcIsMobile(window.innerWidth, breakpoint)),
  withHandlers({
    calcIsMobile: (props: Object): Function => debounce(() => {
      props.setIsMobile(calcIsMobile(window.innerWidth, breakpoint));
    }, 100),
  }),
  lifecycle({
    componentWillMount() {
      window.addEventListener('resize', this.props.calcIsMobile);
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.calcIsMobile);
    },
  }),
);
