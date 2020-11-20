import React, { FC } from 'react';
import { View, ScrollView } from 'react-native';
import { DefaultProps } from '../../../../types';
import { DynamicForm } from '../../../../components';
import { connect } from 'react-redux';
import styles from './styles';

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

const Create: FC<any> = ({ theming: { theme } }) => (
  <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
    <View style={styles.subContainer}>
      <View style={styles.formContainer}>
        <DynamicForm elements={elements} theme={theme} />
      </View>
    </View>
  </ScrollView>
);

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming });

export default connect(mapStateToProps)(Create);
