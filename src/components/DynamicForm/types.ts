import { Theming } from '../../types';

export type DynamicFormProps = {
  elements: Array<Elements>
} & Theming

type Elements = {
  name: string
  component: string
  isTouched: boolean
  isError: boolean
  placeholder: string
  value: string
  onChangeText?: (event: any) => void
  onFocus?: (event: any) => void
}
