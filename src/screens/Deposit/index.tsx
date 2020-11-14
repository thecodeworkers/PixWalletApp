import React, { FC } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { DefaultProps } from '../../types';
import { i18n } from '../../utils';
import { Announcement } from '../../components'
import styles from './styles'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ClockIcon, DiamondIcon, MoneyIcon } from '../../assets/image/svg/icons';
import Icon from 'react-native-vector-icons/Ionicons';

const Deposit: FC<DefaultProps> = ({ theming: { theme } }) => {

  return (
    <>
      <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>

        <View style={[styles.card, { backgroundColor: theme.defaultCard }]}>
          <View style={styles.cardBody}>
            <View style={styles.textContainer}>
              <Text style={[styles.textLeft, { color: theme.screenText }]}>Chase</Text>
              <Text style={[styles.textRight, { color: theme.veryLightGrey }]}>Ariana Lopez</Text>
            </View>
            <View style={styles.textContainer}>
              <View>
                <Text style={[styles.textLeft, { color: theme.screenText }]}>{i18n.t('branch_address')}</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <Text style={[styles.textRight, { color: theme.veryLightGrey }]}>701 Brickell Avenue,Suite</Text>
                <Text style={[styles.textRight, { color: theme.veryLightGrey }]}>1550, Miami, FL 33131</Text>
              </View>

            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.textLeft, { color: theme.screenText }]}>{i18n.t('checking_account')}</Text>
              <Text style={[styles.textRight, { color: theme.veryLightGrey }]}>609501090</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.textLeft, { color: theme.screenText }]}>{i18n.t('routing_number')}</Text>
              <Text style={[styles.textRight, { color: theme.veryLightGrey }]}>021000021</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.textLeft, { color: theme.screenText }]}>{i18n.t('bank_name')}</Text>
              <Text style={[styles.textRight, { color: theme.veryLightGrey }]}>Chase</Text>
            </View>
            <View style={[styles.textContainer, { marginTop: 30, marginBottom: 1 }]}>
              <Text style={[styles.textLeft, { color: theme.screenText }]}>{i18n.t('bank_reference')}</Text>
              <Text style={[styles.textRight, { color: theme.veryLightGrey }]}>77789997432</Text>
            </View>
          </View>
          <View style={[styles.textContainer, { borderTopColor: theme.defaultInactiveIcon, borderTopWidth: 1, justifyContent: 'center' }]}>
            <View style={styles.commisionContainer}>
              <View style={styles.commisionTextContainer}>
                <Text>
                  <Text style={[styles.textLeft, { color: theme.screenText }]}>{i18n.t('commission')}  </Text>
                  <Icon name="help-circle" size={24} color={theme.defaultActiveIcon} ></Icon>
                </Text>

                <Text style={[styles.textRight, { color: theme.veryLightGrey }]}>10$</Text>

              </View>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 6, marginBottom: 6 }}>
          <Announcement theme={theme} icon={<ClockIcon />} text={'funds_credited'} />
        </View>
        <View style={{ marginTop: 6, marginBottom: 6 }}>
          <Announcement theme={theme} icon={<DiamondIcon />} text={'pix_fee'} />
        </View>
        <View style={{ marginTop: 6, marginBottom: 6 }}>
          <Announcement theme={theme} icon={<MoneyIcon />} text={'limit_manage'} />
        </View>

      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Deposit);
