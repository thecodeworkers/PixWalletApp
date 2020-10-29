import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const FormInput = (props: any) => (
  <TextInput
    style={[styles.textInput, { borderColor: (props.isError && props.isTouched) ? 'red' : 'gray' }]}
    {...props}
  />
);

export default FormInput;
