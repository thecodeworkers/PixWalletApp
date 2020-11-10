import React, { FC } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { DefaultProps } from '../../../types';

const CurrencyActivity: FC<DefaultProps | any> = ({ theming: { theme }, navigation }) => {
  return (
    <>
      <StatusBar barStyle={theme.statusBar} />
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.screenText }}>Currency Activity</Text>
        <TouchableOpacity onPress={() => navigation.navigate('portfolio', { screen: 'main' })}>
          <Text>Navigate</Text>
        </TouchableOpacity>
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

export default connect(mapStateToProps)(CurrencyActivity);
