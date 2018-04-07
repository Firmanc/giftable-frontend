// @flow

import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
import type { HeaderProps } from './Header.props';

export default compose(
  withState('showMenu', 'setShowMenu', false),
  withHandlers({
    onLogout: (props: HeaderProps): Function =>
      () => {
        props.logout();
      },
  }),
);
