// @flow

export type LoginProps = {
  id: string,
  handleSubmit: Function,
  isLoggingIn: boolean,
  email: string,
  setEmail: Function,
  password: string,
  setPassword: Function,
  submitLogin: Function,
  componentId: string,
  error: string,
};
