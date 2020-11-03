import React from 'react';
import { Button, Text } from 'react-native';
import { Formik, FormikValues } from 'formik';
import FormItem from './components';
import { TouchableOpacity } from 'react-native-gesture-handler';

const validate = (values: FormikValues) => {
  // const errors: any = {};

  // if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = true;
  // }

  // if(values.password.length < 8) {
  //   errors.password = true;
  //   return errors;
  // }

  // return errors;
};

const elements: Array<any> = [
  {
    name: 'chase',
    component: 'FormInput',
    isTouched: false,
    isError: false,
    placeholder: 'Chase',
    value: ''
  },
  {
    name: 'branchAddress',
    component: 'FormInput',
    isTouched: false,
    isError: false,
    placeholder: 'Branch Address',
    value: ''
  },
  {
    name: 'checkingAccount',
    component: 'FormInput',
    isTouched: false,
    isError: false,
    placeholder: 'Checking Account',
    value: ''
  },
  {
    name: 'routingNumber',
    component: 'FormInput',
    isTouched: false,
    isError: false,
    placeholder: 'Routing Number',
    value: ''
  },
  {
    name: 'bankName',
    component: 'FormInput',
    isTouched: false,
    isError: false,
    placeholder: 'Bank Name',
    value: ''
  }
];


const DynamicForm = () => {
  const initialValues: any = {};

  elements.forEach(({ name, value }) => {
    initialValues[name] = value;
  });

  return (
    <Formik
    initialValues={initialValues}
    onSubmit={values => console.log(values)}
    validate={validate}
    >
      {({ handleChange, handleBlur, handleSubmit, values, isValid, errors, touched }: any) => {
        return (
          <>
            {
              elements.map((element, index) => {
                const { component, name } = element;
                const Item = FormItem[component];
                element.isError = errors[name];
                element.isTouched = touched[name];
                element.value = values[name];

                element.onChangeText = (event: any) => handleChange(name)(event);
                element.onFocus = (event: any) => handleBlur(name)(event);

                return (
                  <Item
                    key={index}
                    {...element}
                  />
                )
              })
            }
            <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
              <Text style={{ color: '#35A7D6', fontWeight: 'bold' }}>Done</Text>
            </TouchableOpacity>
          </>
        )
      }}
    </Formik>
  );
}

export default DynamicForm;
