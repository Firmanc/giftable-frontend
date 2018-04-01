// @flow

export type LoginProps = {
  id: string,
  handleSubmit: Function,
  email: string,
  setEmail: Function,
  password: string,
  setPassword: Function,
  submitLogin: Function,
  componentId: string,
};

export type LoginFormProps = {
  onSubmit: Function,
  email: string,
  password: string,
  setEmail: Function,
  setPassword: Function,
};
