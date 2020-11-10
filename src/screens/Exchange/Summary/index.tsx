import React, { FC } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { DefaultProps } from '../../../types';

const Summary: FC<DefaultProps> = ({ theming: { theme } }) => {
  return (
    <>
      <StatusBar barStyle={theme.statusBar} />
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.screenText }}>Exchange Summary</Text>
      </View>
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
