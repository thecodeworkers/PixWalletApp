import React, { FC, useState } from 'react';
import { View, Text } from 'react-native';
import { BtcCard, EthCard } from '../../../assets/image/svg';
import { DefaultProps } from '../../../types';
import { GradientButton } from '../../../components';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Fontisto';
import styles from './styles';

const Summary: FC<DefaultProps> = ({ theming: { theme } }) => {
  const [progress, setProgress] = useState('Starting to exchange...');

  return (
    <View style={[{ backgroundColor: theme.background }, styles.container]}>
      <View style={styles.currencyContainer}>
        <View style={{ flex: 0.55, flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.currencyCard}>
            <BtcCard/>
          </View>
          <View style={[styles.leftCircle, { backgroundColor: '#F7931A' }]} />
          <LinearGradient style={styles.gradientLine} colors={['#F7931A', '#304352']} start={{ x: 0, y: 0 }} end={{ x: 1.4, y: 0 }} />
          <View style={[styles.rightCircle, { borderColor: '#62698D', }]} />
          <View style={styles.currencyCard}>
            <EthCard/>
          </View>
        </View>
        <View style={{ flex: 0.45, marginHorizontal: '4%' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={{ color: '#21212A', fontSize: 12 }}>Exchanging</Text>
              <Text style={{ color: '#C9C9C9', fontSize: 15 }}>$12</Text>
              <Text style={{ color: '#F7931A', fontSize: 19 }}>023.00 BTC</Text>
            </View>
            <View>
              <Icon name="arrow-swap" size={20} color={theme.defaultIcon} />
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ color: '#21212A', fontSize: 12 }}>Receiving</Text>
              <Text style={{ color: '#C9C9C9', fontSize: 15 }}>$13</Text>
              <Text style={{ color: '#AEAEE6', fontSize: 19 }}>024.00 ETH</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.processContainer}>
        <View style={{ marginBottom: '6%' }}>
          <Text style={{ color: '#F7931A' }}>{progress}</Text>
        </View>
        {
          true ? (
            <View style={{ flexDirection: 'row', marginBottom: '6%', marginHorizontal: '8%' }}>
              <GradientButton theme={theme} text="Continue" route="portfolio" />
            </View>
          ) : null
        }
      </View>
    </View>
  );
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(Summary);
