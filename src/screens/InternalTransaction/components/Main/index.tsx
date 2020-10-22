import React, { FC } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { connect } from 'react-redux';
import { DefaultProps } from '../../../../types';
import { DiamondCurrencies, SelectCurrencies } from '../../../../components'

const Main: FC<DefaultProps> = ({ theming: { theme } }) => {
  return (
    <>
     <View style={[styles.container, { backgroundColor: theme.background }]}>
     <DiamondCurrencies currency='USD' {...{theming: {theme}}}/>
      <SelectCurrencies />
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

export default connect(mapStateToProps)(Main);
