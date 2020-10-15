import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { DefaultProps } from '../../types';
import { i18n } from '../../utils';
import styles from './styles'
import { connect } from 'react-redux';

import { AnnouncementProps } from './interface'

const Announcement: FC<DefaultProps & AnnouncementProps> = ({ theming: { theme }, text, icon }) => {
  return (
    <>
      <View style={[styles.infoContainer, { backgroundColor: theme.announcement }]}>

        {/*  <View  style={[styles.infoIcon,{width:'100%', height:'100%'} ]}> */}


        {/*    <View style={{ width:'10%', height:'10%', backgroundColor:'red'}}>
     
       </View> */}
        <View style={{ flex:0.25, justifyContent:"center", alignItems:'center'}}>
          <View style={{width:30 , height:30, }}>
         {icon}
          </View>
  
        </View>

        <View style={{flex:0.75}}>

            <Text style={[styles.infoText, { borderColor: theme.screenText }]}>{i18n.t(text)}</Text> 
        </View>

      </View>
    </>

  );
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(Announcement);
