import React, { FC, useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { DefaultProps } from '../../types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { i18n } from '../../utils';
import { BtcCard, EthCard, DashCard } from '../../assets/image/svg';
import styles from './styles'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Separator } from '..'
import { showComponent } from '../../store/actions' ;

const SelectCryptoModal: FC<DefaultProps | any> = ({ theming: { theme }, action, intermittence }: any) => {

  const closeModal = () => {
    action.showComponent(false)
  }
  const options =
    [{
      icon: <BtcCard />,
      color: 'orange'
    },
    {
      icon: <EthCard />,
      color: 'purple'
    },
    {
      icon: <DashCard />,
      color: 'blue'
    },
    ]

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={intermittence.modal}
    >
      
      <TouchableOpacity onPress={closeModal} style={styles.selectContainer} activeOpacity={1}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={theme.cardGradient}
            style={styles.selectButton}
          >
            <Ionicons name="chevron-down-outline" color={theme.screenText} size={32} />
          </LinearGradient>
        </TouchableOpacity>

      <View style={styles.centeredView}>
    
        {
          options.map((res, index) => {
            return (
              <View style={[styles.modalView, { backgroundColor: theme.defaultCard }]} key={index}>
                <View style={styles.card} >

                  <View style={styles.currency}>
                    {res.icon}
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={[styles.text, { color: theme.screenText }]}>Default Porfolio</Text>
                    <Text style={[styles.amount, { color: res.color }]}>1.234 USD</Text>

                  </View>

                </View>
                <View style={{ width: '100%' }}>
                  <Separator color={theme.separatorGray} width={3} />
                </View>
              </View>
            )
          })}
      </View>
    </Modal>

  );
}

const mapStateToProps = ({ theming, intermittence}: DefaultProps |any): DefaultProps| any => ({ theming, intermittence})

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    showComponent
  };

  return {
    action: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCryptoModal);
