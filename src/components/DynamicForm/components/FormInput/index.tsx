import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const FormInput = ({ theme, isError, isTouched, ...props }: any) => (
  <TextInput
    style={[styles.textInput, {
      borderColor: (isError && isTouched) ? 'red' : theme.summerSky,
      backgroundColor: theme.inputBackground
    }]}
    placeholderTextColor={theme.veryLightGrey}
    {...props}
  />
);

export default FormInput;
