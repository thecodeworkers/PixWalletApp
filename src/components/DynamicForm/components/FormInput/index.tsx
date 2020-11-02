import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const FormInput = ({ isError, isTouched, ...props }: any) => (
  <TextInput
    style={[styles.textInput, { borderColor: (isError && isTouched) ? 'red' : '#35A7D6' }]}
    placeholderTextColor={'#C9C9C9'}
    {...props}
  />
);

export default FormInput;
