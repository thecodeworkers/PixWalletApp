import React from 'react';
import { Button } from 'react-native';
import { Formik, FormikValues } from 'formik';
import FormItem from './components';

const validate = (values: FormikValues) => {
  const errors: any = {};

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = true;
  }

  if(values.password.length > 3 && values.password.length < 8) {
    errors.password = true;
    return errors;
  }

  return errors;
};

const elements: Array<any> = [
  {
    name: 'email',
    component: 'FormInput',
    isTouched: false,
    isError: false,
    placeholder: 'Email Address',
    keyboardType: 'email-address',
    value: ''
  },
  {
    name: 'password',
    component: 'FormInput',
    isTouched: false,
    isError: false,
    placeholder: 'Password',
    secureTextEntry: true,
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
      {({ handleChange, handleBlur, handleSubmit, values, isValid, errors, touched }) => {
        return (
          <>
            {
              elements.map((element, index) => {
                const { component, name } = element;
                const Item = FormItem[component];
                element.isError = errors[name];
                element.isTouched = touched[name];
                element.value = values[name];

                return (
                  <Item
                    key={index}
                    onChangeText={handleChange(name)}
                    onFocus={handleBlur(name)}
                    {...element}
                  />
                )
              })
            }
            <Button onPress={handleSubmit} title="Submit" disabled={!isValid}  />
          </>
        )
      }}
    </Formik>
  );
}

export default DynamicForm;
