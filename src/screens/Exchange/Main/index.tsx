import React, { FC } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { DefaultProps } from '../../../types';
import { connect } from 'react-redux';
import { BtcCard, EthCard } from '../../../assets/image/svg';
import styles from './styles';

const Main: FC<DefaultProps> = ({ theming: { theme } }) => {
  return (
    <ScrollView style={[{ backgroundColor: theme.background }, styles.container]}>
      <View>
        <View style={[styles.currencyCardContainer, styles.topMargin, { backgroundColor: theme.defaultCard }]}>
          <View style={styles.currencyCardIconContainer}>
            <BtcCard/>
          </View>
          <View>
            <Text style={[styles.currencyCardText, { color: theme.screenText }]}>My wallet</Text>
            <Text style={[styles.currencyCardAmount, { color: '#F7931A' }]}>10.00 BTC</Text>
          </View>
        </View>
        <View style={[styles.currencyCardContainer, { backgroundColor: theme.defaultCard }]}>
          <View style={styles.currencyCardIconContainer}>
            <EthCard/>
          </View>
          <View>
            <Text style={[styles.currencyCardText, { color: theme.screenText }]}>My wallet</Text>
            <Text style={[styles.currencyCardAmount, { color: '#AEAEE6' }]}>10.00 ETH</Text>
          </View>
        </View>
        <View style={[styles.textCardContainer, styles.amountSeparations, { backgroundColor: theme.defaultCard }]}>
          <View style={styles.leftMargin}>
            <Text style={[{ color: theme.screenText }, styles.textCardTitleContainer]}>Exchanging</Text>
          </View>
          <View style={styles.textCardRightContainer}>
            <Text style={[{ color: '#C9C9C9' }, styles.textCardTitleContainer]}>$12</Text>
            <Text style={[{ color: '#F7931A' }, styles.currencyCardAmount]}>023.00 BTC</Text>
          </View>
        </View>
        <View style={[styles.textCardContainer, { backgroundColor: theme.defaultCard }]}>
          <View style={styles.leftMargin}>
            <Text style={[{ color: theme.screenText }, styles.textCardTitleContainer]}>Receiving</Text>
          </View>
          <View style={styles.textCardRightContainer}>
            <Text style={[{ color: '#C9C9C9' }, styles.textCardTitleContainer]}>$13</Text>
            <Text style={[{ color: '#AEAEE6' }, styles.currencyCardAmount]}>0324.00 ETH</Text>
          </View>
        </View>
        <View style={[styles.textShortCardContainer, { backgroundColor: theme.defaultCard }]}>
          <View style={styles.leftMargin}>
            <Text style={[{ color: theme.screenText }, styles.textCardTitleContainer]}>Comisión</Text>
          </View>
          <View style={styles.textCardRightContainer}>
            <Text style={[{ color: theme.screenText }, styles.textCardTitleContainer]}>$25</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(Main);
