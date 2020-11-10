import React, { FC } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { DefaultProps } from '../../../types';

const Summary: FC<DefaultProps> = ({ theming: { theme } }) => {
  return (
    <>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});;

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(Summary);
