import React, { FC } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { DefaultProps } from '../../../../../types';
import styles from './styles'
import { DiamondCurrencies, GradientButton, InputCurrency, SelectCrypto } from '../../../../../components'
import FaIcons from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const Main: FC<DefaultProps> = ({ theming: { theme } }) => {
  return (

    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={{ flex: 0.25 }}>
        <DiamondCurrencies currency={'BTC'} />
      </View>

      <View style={{ flex: 0.25 }}>
        <SelectCrypto  {...{ theming: { theme } }} symbol={'BTC'} />
      </View>

      <View style={{ alignSelf: 'center', flex: 0.20 }}>
        <InputCurrency {...{ theming: { theme } }} symbol={'BTC'} />
      </View>

      <View style={{ flex: 0.20 }}>
        <View style={styles.secondCard}>
          <View style={[{ backgroundColor: theme.defaultCard }, styles.feeCard]}>
            <Text style={[{ color: theme.screenText }]}>Comisión</Text>
            <Text style={[{ color: theme.screenText }]}>25$</Text>
          </View>
          <View style={[{ backgroundColor: theme.defaultCard }, styles.dateCard]}>
            <Text style={[{ color: theme.screenText }]}>Total</Text>
            <Text style={[{ color: theme.screenText }]} >0.22</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 0.15, justifyContent: 'space-between', width: '90%', flexDirection:'row', alignSelf:'center' }}>

        <TouchableOpacity style={styles.selectContainer} activeOpacity={1}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={theme.cardGradient}
            style={styles.selectButton}
          >
            <Icons name="list" color={theme.screenText} size={32} />
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.clipBoardContainer, { borderColor: theme.summerSky }]}>
          <TextInput
            style={styles.clipBoardInput}
           placeholder={'Tap to paste address'}
           placeholderTextColor={theme.veryLightGrey}
            underlineColorAndroid="transparent"
            editable={false}
          />
          <FaIcons name="clone" solid={true} style={[styles.clipBoardIcon, { color: theme.summerSky }]} size={30} />
        </TouchableOpacity>

      </View>

      <View style={{ flex: 0.15, justifyContent: "flex-end", marginBottom: 10 }}>
        <GradientButton {...{ theming: { theme }, text: 'Next', route:'summary' }} />
      </View>
    </View>
  );
}


const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(Main);
