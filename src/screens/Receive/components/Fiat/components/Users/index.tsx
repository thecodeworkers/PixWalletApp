import React, { FC } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { DefaultProps } from '../../../../../../types';
import { i18n } from '../../../../../../utils';
import { Header, DiamondCurrencies, SelectCurrencies } from '../../../../../../components'
import styles from './styles'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const Users: FC<DefaultProps> = ({ theming: { theme }, action }: any) => {

  return (
    <>
      <StatusBar barStyle={theme.statusBar} />
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Header route={''} title='send' colorRight={theme.screenText} colorLeft={theme.defaultActiveIcon} />

        <DiamondCurrencies currency={'BTC'} />

        <SelectCurrencies />
      </View>
    </>
  );
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
  };

  return {
    action: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
