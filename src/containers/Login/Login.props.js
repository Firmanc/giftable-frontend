// @flow

export type LoginProps = {
  handleSubmit: Function,
  email: string,
  setEmail: Function,
  password: string,
  setPassword: Function,
  submitLogin: Function,
};

export type LoginFormProps = {
  onSubmit: Function,
  email: string,
  password: string,
  setEmail: Function,
  setPassword: Function,
};
