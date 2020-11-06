import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Formik, FormikValues } from 'formik';
import { DynamicFormProps } from './types';
import FormItem from './components';

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


const DynamicForm: FC<DynamicFormProps> = ({ elements, theme }) => {
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
                    theme={theme}
                    {...element}
                  />
                )
              })
            }
            <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
              <Text style={{ color: theme.summerSky, fontWeight: 'bold' }}>Done</Text>
            </TouchableOpacity>
          </>
        )
      }}
    </Formik>
  );
}

export default DynamicForm;
