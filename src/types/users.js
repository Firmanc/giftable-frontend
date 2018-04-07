// @flow

export interface UserTypes {
  id: string,
  email: string,
  firstName: string,
  lastName: string,
  fullName?: string,
  phone: ?string,
  profileImage: ?string,
  isActive: boolean,
}
