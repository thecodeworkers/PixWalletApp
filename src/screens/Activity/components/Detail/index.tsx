import React, { FC } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { EthCard } from '../../../../assets/image/svg';
import { DefaultProps } from '../../../../types';
import styles from './styles';

const Detail: FC<DefaultProps> = ({ theming: { theme } }) => {
  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.firstCard, { backgroundColor: theme.defaultCard }]}>
        <View style={styles.symbolContainer}>
          <View style={styles.currency}>
            <EthCard/>
          </View>
        </View>
        <View style={styles.sentText}>
          <Text style={styles.normalFont(theme.screenTitle, 13)}>Enviando</Text>
          <Text style={styles.normalFont(theme.screenTitle, 15)}>4.7 ETH</Text>
          <Text style={styles.normalFont('#C9C9C9', 17)}>-$1,132.00</Text>
        </View>
      </View>
      <View style={styles.secondCard}>
        <View style={[{ backgroundColor: theme.defaultCard }, styles.feeCard]}>
          <Text style={styles.marginFont(theme.screenText, 14)}>Comisión</Text>
          <Text style={styles.normalFont(theme.screenText, 14)}>4.7 ETH</Text>
          <Text style={styles.normalFont('#C9C9C9', 10)}>-$1,132.00</Text>
        </View>
        <View style={[{ backgroundColor: theme.defaultCard }, styles.dateCard]}>
          <Text style={styles.normalFont('#B7B7B7', 10)}>May,12 2020</Text>
          <Text style={styles.normalFont('#B7B7B7', 10)}>4:18 pm</Text>
        </View>
      </View>
      <View style={[{ backgroundColor: theme.defaultCard }, styles.thirdCard]}>
        <Text style={styles.marginFont(theme.screenText)}>Nota personal</Text>
        <Text style={styles.normalFont('#B7B7B7', 12)}>Add note</Text>
      </View>
      <View style={[{ backgroundColor: theme.defaultCard }, styles.fourthCard]}>
        <Text style={styles.marginFont(theme.screenText)}>Enviado</Text>
        <Text style={styles.widthFont}>1qwteydhfa132gswrdgsfqtteypmnbvxc129sfarwt</Text>
      </View>
      <View style={[{ backgroundColor: theme.defaultCard }, styles.fifthCard]}>
        <Text style={styles.marginFont(theme.screenText)}>Transaction ID</Text>
        <Text style={styles.widthFont}>1qwteydhfa132gswrdgsfqtteypmnbvxc129sfarwt</Text>
      </View>
    </ScrollView>
  );
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming });

export default connect(mapStateToProps)(Detail);
