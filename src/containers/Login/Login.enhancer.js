// @flow

import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
import { Login } from 'types/auths';
import type { LoginProps } from './Login.props';

const toLoginData: Function = (props: LoginProps): Login => ({
  email: props.email,
  password: props.password,
});

export default compose(
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withHandlers({
    handleSubmit: (props: LoginProps): Function =>
      (event: SyntheticEvent<HTMLButtonElement>) => {
        event.preventDefault();
        props.submitLogin(
          toLoginData(props),
          props.componentId,
        );
      },
  }),
);
