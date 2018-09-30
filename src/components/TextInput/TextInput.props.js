// @flow

export type TextInputProps = {
  id: string,
  value: string,
  placeholder?: string,
  error?: string,
  label?: string,
  type?: string,
  onChange: string => void,
  onBlur?: () => void,
  onFocus?: () => void,
  classModifiers?: Array<string>,
  displayError?: boolean,
}
