import React, { FC } from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { DefaultProps } from '../../../../../types';
import styles from './styles'
import { GradientButton} from '../../../../../components';
import FaIcons from 'react-native-vector-icons/FontAwesome5';
import { PixLogo } from '../../../../../assets/image/svg'
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/Ionicons';

const Summary: FC<DefaultProps> = ({ theming: { theme } }) => {
  return (

     <View style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={{flex:0.25}}>
        <View style={{width:100, alignSelf:'center'}}>
          <PixLogo />
          </View>

       </View>

       <View style={{ flex: 0.20 }}>
        <View style={styles.firstCard}>
          <View style={[{ backgroundColor: theme.defaultCard }, styles.sendingCard]}>
            <Text style={[{ color: theme.screenText }]}>Sending</Text>
            <Text style={[{ color: theme.screenText }]}>0.2300000</Text>
            <Text style={[{ color: theme.screenText }]}>12$</Text>
          </View>
      </View>
      </View>

       <View style={{ flex: 0.20 }}>
        <View style={styles.secondCard}>
          <View style={[{ backgroundColor: theme.defaultCard }, styles.feeCard]}>
            <Text style={[{ color: theme.screenText }]}>Comisión</Text>
            <Text style={[{ color: theme.screenText }]}>25$</Text>
          </View>
          <View style={[{ backgroundColor: theme.defaultCard }, styles.dateCard]}>
            <Text style={[{ color: theme.screenText }]}>Balance</Text>
            <Text style={[{ color: theme.screenText }]} >0.22</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 0.20 }}>
        <View style={styles.firstCard}>
          <View style={[{ backgroundColor: theme.defaultCard }, styles.sendingCard]}>
            <Text style={[{ color: theme.screenText }]}>Sending to</Text>
            <Text style={[{ color: theme.screenText }]}>ejrk4bbnk3l44klbk5lbl435nl3nkl</Text>
          </View>
      </View>
      </View>

      <View style={{ flex: 0.20, justifyContent: 'center', width: '90%', flexDirection:'row', alignSelf:'center' }}>

        <TouchableOpacity style={styles.selectContainer} activeOpacity={1}>

            <FaIcons name="lock" color={theme.screenText} size={32} />

</TouchableOpacity>
        <TouchableOpacity style={[styles.clipBoardContainer, { borderColor: theme.summerSky, backgroundColor:theme.whiteSmoke}]}>
          <TextInput
            style={styles.clipBoardInput}
           placeholder={'0 0 0 0'}
           placeholderTextColor={theme.veryLightGrey}
            underlineColorAndroid="transparent"
            editable={false}
          />
        </TouchableOpacity>

      </View>

      <View style={{flex:0.25, justifyContent:"flex-end", marginBottom:10}}>
      <GradientButton {...{theming: {theme},text: 'Next'}}  />
      </View>
     </View>
  );
}


const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(Summary);
