import React, { FC } from 'react';
import { View } from 'react-native';
import { DefaultProps } from '../../../types';
import { connect } from 'react-redux';
import { DynamicForm } from '../../../components';
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
  <View style={[styles.container, { backgroundColor: theme.background }]}>
    <View style={{ flex: 0.2 }}>

    </View>
    <View style={{ flex: 0.8, width: '75%', alignItems: 'center' }}>
      <DynamicForm elements={elements} theme={theme} />
    </View>
  </View>
);

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming });

export default connect(mapStateToProps)(Create);
