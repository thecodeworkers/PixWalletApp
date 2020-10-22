import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { DefaultProps } from '../../types';
import { i18n } from '../../utils';
import styles from './styles'
import { connect } from 'react-redux';

import { AnnouncementProps } from './types'

const Announcement: FC<DefaultProps & AnnouncementProps> = ({ theming: { theme }, text, icon }) => {
  return (
    <>
      <View style={[styles.main, { backgroundColor: theme.announcement }]}>

        <View style={styles.infoContainer}>
          <View style={styles.infoIcon}>
         {icon}
          </View>
  
        </View>

        <View style={{flex:0.75}}>

            <Text style={[styles.infoText, { color: theme.screenText }]}>{i18n.t(text)}</Text> 
        </View>

      </View>
    </>

  );
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(Announcement);
