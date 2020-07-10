import React, { useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCurrencies } from './store/actions';

const Main = (props: any) => {
  const { currencies } = props.currency;
  
  useEffect(() => {
    props.action.getCurrencies();
  }, []);
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {
          currencies.map((currency: any, index: number) => (
            <Text key={index}>{currency.name}</Text>
          ))
        }
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
});

const mapStateProps = (state: any) => (state);

const mapDispatchToProps = (dispatch: any) => {
  const actions = { 
    getCurrencies
  };

  return {
    action: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(Main);
