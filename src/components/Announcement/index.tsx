import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { i18n } from '../../utils';
import styles from './styles'

import { AnnouncementProps } from './types'

const Announcement: FC<AnnouncementProps> = ({ theme, text, icon }) => {
  return (
    <>
      <View style={[styles.main, { backgroundColor: theme.announcement }]}>

        <View style={styles.infoContainer}>
          <View style={styles.infoIcon}>
            {icon}
          </View>
        </View>

        <View style={{ flex: 0.75 }}>
          <Text style={[styles.infoText, { color: theme.suvaGray }]}>{i18n.t(text)}</Text>
        </View>

      </View>
    </>

  );
}

export default Announcement;
