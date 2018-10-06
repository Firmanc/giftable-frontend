// @flow

export type LoginFormProps = {
  onSubmit: Function,
  email: string,
  password: string,
  setEmail: Function,
  setPassword: Function,
  isLoggingIn: boolean,
};
