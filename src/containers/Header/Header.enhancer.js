// @flow

import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
import { mobileViewEnhancer } from 'src/utils';
import type { HeaderProps } from './Header.props';

export default compose(
  mobileViewEnhancer(),
  withState('showMenu', 'setShowMenu', false),
  withHandlers({
    onLogout: (props: HeaderProps): Function => () => {
      props.logout();
    },
    handleShowMenu: (props: HeaderProps): Function => () => {
      props.setShowMenu(!props.showMenu);
    },
  }),
);
