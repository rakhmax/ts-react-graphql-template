import { ReactNode } from 'react'

export default interface IFormProps {
  buttonTitle?: string,
  fields: any,
  header?: ReactNode,
  loading: boolean,
  changeHandler?: (e: any) => any,
  submitHandler?: (e: any) => any
}
