import React, { FC, useState } from 'react';
import {View, Text, Share, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { DefaultProps } from '../../../types';
import {Announcement, DiamondCurrencies} from '../../../components'
import { i18n } from '../../../utils';
import styles from './styles'
import QRCode from 'react-native-qrcode-svg';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FaIcons from 'react-native-vector-icons/FontAwesome5';
import Clipboard from '@react-native-community/clipboard';
import { InfoIcon } from '../../../assets/image/svg/icons';

const ReceiveCrypto: FC<DefaultProps> = ({ theming: { theme } }) => {
  
  const wallet = '35xnAT9CbcURiWTMN7AS9cbVdHN4JrrCBT'
  const user = 'Gerard Miot'
  const [copied, setCopied] = useState(false);

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
    <>
       <View style={[styles.container, { backgroundColor: theme.background }]}>

          <DiamondCurrencies currency='USD'/>

        <View style={styles.qrContainer}>
          <QRCode
            value={wallet}
            size={170}
            backgroundColor={theme.background}
            color={theme.screenText}
            logo={require('../../../assets/image/pix.png')}
            logoSize={55}
            logoBorderRadius={8}
          />
        </View>

        <View style={{marginTop: 10}}>
        <TouchableOpacity style={[styles.shareButton, { backgroundColor: theme.screenText }]} onPress={onShare}>
          <Text style={[styles.shareText, { color: theme.background }]}>{i18n.t('share')}</Text>
          <MaterialIcon name="reply" style={styles.shareIcon} color={theme.background} size={30} />
        </TouchableOpacity>
        </View>


        <View style={{marginTop: 30}}>


        {
          copied
          ?  <Text style={[styles.copyText, { color: theme.screenText }]} >{i18n.t('copied')}</Text>
          : <Text style={[styles.copyText, { color: theme.screenText }]} >{i18n.t('tap_copy')}</Text>
        }

          <TouchableOpacity style={[styles.clipBoardContainer, { borderColor: theme.defaultActiveIcon }]} onPress={copyClipboard}>
            <TextInput
              style={styles.clipBoardInput}
              placeholder={wallet}
              placeholderTextColor={theme.defaultActiveIcon}
              underlineColorAndroid="transparent"
              editable={false}
            />
            <FaIcons name="clone" solid={true} style={[styles.clipBoardIcon, { color: theme.defaultActiveIcon }]} size={30} />
          </TouchableOpacity>

          </View>
          <View  style={{marginTop: 10}}>
          <Announcement icon={<InfoIcon/>} text={'info_receive'} />
          </View>

      </View>
    </>
  );
}


const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(ReceiveCrypto);
