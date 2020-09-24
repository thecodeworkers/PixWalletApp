import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

const Main = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text>Pix App</Text>
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

export default Main;
