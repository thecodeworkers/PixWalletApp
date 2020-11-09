import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { DefaultProps } from '../../../../../types';
import styles from './styles'
import { GradientButton } from '../../../../../components'
import { PixLogo } from '../../../../../assets/image/svg'

const Complete: FC<DefaultProps> = ({ theming: { theme } }) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={{ flex: 0.40 }}>
        <View style={{ width: 100, alignSelf: 'center' }}>
          <PixLogo color={'orange'} />
        </View>
      </View>

      <View style={{ flex: 0.20 }}>
        <View style={styles.firstCard}>
          <View style={[{ backgroundColor: theme.defaultCard }, styles.sendingCard]}>
            <Text style={[{ color: theme.screenText }]}>Sent</Text>
            <Text style={[{ color: 'orange', fontSize:24  }]}>0.2300000</Text>
            <Text style={[{ color: theme.screenText, fontSize:18 }]}>12$</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 0.40 }}>
        <View style={styles.firstCard}>
          <View style={[{ backgroundColor: theme.defaultCard }, styles.sendingCard]}>
            <Text style={[{ color: theme.screenText }]}>Sent to</Text>
            <Text style={[{ color: 'orange' }]}>ejrk4bbnk3l44klbk5lbl435nl3nkl</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 0.25, justifyContent: "flex-end", marginBottom: 10 }}>
        <GradientButton {...{ theming: { theme }, text: 'Continue', route: 'complete' }} />
      </View>

    </View>


  );
}


const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(Complete);
