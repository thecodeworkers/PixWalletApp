import React, { FC } from 'react';
import { View, StatusBar, TouchableOpacity, Text } from 'react-native';
import { i18n } from '../../utils';
import styles from './styles'
import { connect } from 'react-redux';
import { BankIcon, CardIcon, PixLogo } from '../../assets/image/svg/icons';
import { useNavigation } from '@react-navigation/native';
import { TrasactionTypeProps } from './types'

const TransactionType: FC<TrasactionTypeProps> = ({ theming: { theme }, selectedCurrency }) => {

  const navigation = useNavigation();
  const type = selectedCurrency.currency.transactionType

  const options: any =
    [
      {
        route: 'internalTransaction',
        icon: <PixLogo />,
        iconTitle: 'between_users',
        text: 'funds_free',
        footer: 'daily_limit',
        show: type === 'withdraw' ? true : false
      },
      {
        route: type === 'withdraw' ? 'withdrawFiatMain' : 'deposit',
        icon: <BankIcon />,
        iconTitle: 'bank_account',
        text: 'funds_bank',
        footer: 'daily_limit',
        show: true,
      },
      {
        route: type === 'withdraw' ? 'withdrawFiatMain' : 'deposit',
        icon: <CardIcon />,
        iconTitle: 'bank_transfer',
        text: 'funds_transfer',
        footer: 'daily_limit',
        show: true,
      },
    ]

  return (
    <>
      <StatusBar barStyle={theme.statusBar} />
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={styles.cardContainer}>

          {
            options.map((res: any, index: any) => {

              return (
                res.show ? (
                  <TouchableOpacity onPress={() => navigation.navigate(res.route)} style={[styles.card, { backgroundColor: theme.defaultCard }]} key={index}>

                    <View style={styles.cardHeader}>
                      <View style={styles.cardHeaderIconContainer}>
                        <View style={{ width: 30, height: 30 }}>
                          {res.icon}
                        </View>
                      </View>
                      <View style={{ flex: 0.80 }}>
                        <Text style={[styles.cardHeaderText, { color: theme.screenText }]}>{i18n.t(res.iconTitle)}</Text>
                      </View>
                    </View>
                    <View style={styles.cardBody}>
                      <Text style={[styles.cardBodyText, { color: theme.screenText }]}>{i18n.t(res.text)}</Text>
                    </View>

                    <View style={styles.cardFooter}>
                      <Text style={[styles.cardFooterText, { color: theme.screenText }]}>{i18n.t(res.footer)}</Text>
                    </View>
                  </TouchableOpacity>) : null
              )
            })
          }
        </View>
      </View>
    </>
  );
}

const mapStateToProps = ({ theming, selectedCurrency }: TrasactionTypeProps | any): TrasactionTypeProps | any => ({ theming, selectedCurrency })

export default connect(mapStateToProps)(TransactionType);

