import React, { FC } from 'react';
import { View, StatusBar, TouchableOpacity, Text } from 'react-native';
import { DefaultProps } from '../../../../../../types';
import { i18n } from '../../../../../../utils';
import { Header, Announcement } from '../../../../../../components'
import styles from './styles'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ClockIcon, DiamondIcon, MoneyIcon } from '../../../../../../assets/image/svg/icons';
import Icon from 'react-native-vector-icons/Ionicons';

const Bank: FC<DefaultProps> = ({ theming: { theme }, action }: any) => {

  return (
    <>
      <StatusBar barStyle={theme.statusBar} />
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Header route={''} title='receive' colorRight={theme.screenText} colorLeft={theme.defaultActiveIcon} />

        <View style={[styles.card, { backgroundColor: theme.defaultCard }]}>
          <View style={styles.cardBody}>
            <View style={styles.textLeftContainer}>
              <Text style={[styles.textLeft, { color: theme.screenText }]}>{i18n.t('full_name')}</Text>
              <Text style={[styles.textLeft, { color: theme.screenText }]}>{i18n.t('branch_address')}</Text>
              <Text style={[styles.textLeft, { color: theme.screenText }]}>{i18n.t('checking_account')}</Text>
              <Text style={[styles.textLeft, { color: theme.screenText }]}>{i18n.t('routing_number')}</Text>
              <Text style={[styles.textLeft, { color: theme.screenText }]}>{i18n.t('bank_name')}</Text>
              <Text style={[styles.textLeft, { color: theme.screenText }]}>{i18n.t('bank_reference')}</Text>
            </View>
            <View style={styles.textRightContainer}>
              <Text style={[styles.textRight, { color: theme.veryLightGrey }]}>{i18n.t('full_name')}</Text>
              <Text style={[styles.textRight, { color: theme.veryLightGrey }]}>{i18n.t('branch_address')}</Text>
              <Text style={[styles.textRight, { color: theme.defaultActiveIcon }]}>{i18n.t('checking_account')}</Text>
              <Text style={[styles.textRight, { color: theme.veryLightGrey }]}>{i18n.t('routing_number')}</Text>
              <Text style={[styles.textRight, { color: theme.defaultActiveIcon }]}>{i18n.t('bank_name')}</Text>
              <Text style={[styles.textRight, { color: theme.veryLightGrey }]}>{i18n.t('bank_reference')}</Text>


            </View>
          </View>
          <View style={[styles.commisionContainer, { borderTopColor: theme.defaultInactiveIcon }]}>
            <View style={styles.commisionTextContainer}>

              <Text style={[styles.textLeft, { color: theme.screenText }]}>{i18n.t('commission')} 
               <Icon name="help-circle" size={24} color={theme.defaultActiveIcon} ></Icon>
               </Text>
              <Text style={[styles.textRight, { color: theme.veryLightGrey }]}>{i18n.t('commission')}</Text>
            </View>

          </View>

        </View>
        <View style={{marginTop:5, marginBottom:5}}>
            <Announcement icon={<ClockIcon />} text={'funds_credited'} />
        </View>
      <View style={{marginTop:5, marginBottom:5}}>
      <Announcement icon={<DiamondIcon />} text={'pix_fee'} />
      </View>
      <View style={{marginTop:5, marginBottom:5}}>
       <Announcement icon={<MoneyIcon />} text={'limit_manage'} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Bank);
