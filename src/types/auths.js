// @flow

export interface Login {
  email: string,
  password: string,
}

export interface Auth {
  currentUser: Object,
  token: string,
}
