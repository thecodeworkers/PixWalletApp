import React, { FC } from 'react';
import { View, StatusBar,  Text } from 'react-native';
import { DefaultProps } from '../../types';
import { i18n } from '../../utils';
import { Header, DiamondCurrencies } from '../../components'
import styles from './styles'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UsdCard } from '../../assets/image/svg';
import { useNavigation } from '@react-navigation/native';

const SelectCurrencies: FC<DefaultProps> = ({ theming: { theme }, action }: any) => {

  const navigation = useNavigation();

  return (
    <>

        <View style={styles.cardContainer}>
        <View style={[styles.card, { backgroundColor: theme.defaultCard }]}>
            <View style={styles.currency}>
              <UsdCard />
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.text, { color: theme.screenText }]}>Default Porfolio</Text>
              <Text style={[styles.amount, { color: theme.screenText }]}>1.234 USD</Text>
            </View>
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(SelectCurrencies);
