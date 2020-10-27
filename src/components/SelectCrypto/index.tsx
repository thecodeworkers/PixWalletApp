import React, { FC, useState } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { DefaultProps } from '../../types';
import { i18n } from '../../utils';
import styles from './styles'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UsdCard } from '../../assets/image/svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import SelectCryptoModal from '../SelectCryptoModal'
import { showComponent } from '../../store/actions' ;

const SelectCrypto: FC<DefaultProps> = ({ theming: { theme }, action, intermittence }: any) => {


  const openModal = () => {
    action.showComponent(true)
  }

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
          <TouchableOpacity onPress={openModal}  style={styles.selectContainer} activeOpacity={1}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={theme.cardGradient}
              style={styles.selectButton}
            >
              <Ionicons name="chevron-down-outline" color={theme.screenText} size={32} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
    <SelectCryptoModal />
<<<<<<< HEAD
=======

      </View>
>>>>>>> 9321a14eae57f7947feed14594e8fbd41dbc3b72

      </View>
    </>
  );
}

const mapStateToProps = ({ theming, intermittence }: DefaultProps | any): DefaultProps | any => ({ theming, intermittence })

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    showComponent
  };

  return {
    action: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCrypto);
