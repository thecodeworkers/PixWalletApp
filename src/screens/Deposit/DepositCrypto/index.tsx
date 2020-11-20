import React, { FC, useState } from 'react';
import { View, Text, Share, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Announcement, DiamondCurrencies } from '../../../components'
import { i18n } from '../../../utils';
import styles from './styles'
import QRCode from 'react-native-qrcode-svg';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FaIcons from 'react-native-vector-icons/FontAwesome5';
import Clipboard from '@react-native-community/clipboard';
import { InfoIcon } from '../../../assets/image/svg/icons';
import { ReceiveProps } from './types'


const ReceiveScreen: FC<ReceiveProps> = ({ theming: { theme }, selectedCurrency }) => {

  const wallet = '35xnAT9CbcURiWTMN7AS9cbVdHN4JrrCBT'
  const user = 'Gerard Miot'
  const [copied, setCopied] = useState(false);
  const currency = selectedCurrency.currency



  const copyClipboard = async () => {
    Clipboard.setString(wallet);
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1000)
  };


  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${user} te envia su wallet para que le realices un pago:
        ${wallet}`
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error);

    }
  };

  return (
      <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={styles.diamondContainer}>
          <DiamondCurrencies currency={currency.symbol} />
        </View>


        <View style={styles.qrContainer}>
          <QRCode
            value={wallet}
            size={170}
            backgroundColor={theme.background}
            color={theme.screenText}
            logo={require('../../../assets/image/pix.png')}
            logoSize={30}
            logoBorderRadius={4}
          />
        </View>

        <View style={styles.shareContainer}>
          <TouchableOpacity style={[styles.shareButton, { backgroundColor: theme.shareButton }]} onPress={onShare}>
            <Text style={[styles.shareText, { color: theme.whiteSmoke }]}>{i18n.t('share')}</Text>
            <MaterialIcon name="reply" style={styles.shareIcon} color={theme.whiteSmoke} size={30} />
          </TouchableOpacity>
        </View>


        <View style={styles.textContainer}>
          {
            copied
              ? <Text style={[styles.copyText, { color: theme.screenText }]} >{i18n.t('copied')}</Text>
              : <Text style={[styles.copyText, { color: theme.screenText }]} >{i18n.t('tap_copy')}</Text>
          }

          <TouchableOpacity style={[styles.clipBoardContainer, { borderColor: theme.inputPasteBorder }]} onPress={copyClipboard}>
            <TextInput
              style={styles.clipBoardInput}
              placeholder={wallet}
              placeholderTextColor={theme.pacificBlue}
              underlineColorAndroid="transparent"
              editable={false}
            />
            <FaIcons name="clone" solid={true} style={[styles.clipBoardIcon, { color: theme.summerSky }]} size={30} />
          </TouchableOpacity>

        </View>
        <View style={styles.announcementContainer}>
          <Announcement theme={theme} icon={<InfoIcon />} text={'info_receive'} />
        </View>

      </ScrollView>

  );
}

const mapStateToProps = ({ theming, selectedCurrency }: ReceiveProps): ReceiveProps => ({ theming, selectedCurrency })

export default connect(mapStateToProps)(ReceiveScreen);
