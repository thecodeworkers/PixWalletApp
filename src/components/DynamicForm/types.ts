export type DynamicFormProps = {
  elements: Array<Elements>
}

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
