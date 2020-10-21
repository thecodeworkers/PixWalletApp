import React, { FC } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { Arrows } from '../../../../../../assets/image/svg';
import { DefaultProps } from '../../../../../../types';
import { RedirectProps } from './types';
import { connect } from 'react-redux';
import styles from './styles';

const CardsRedirect: FC<RedirectProps> = ({ theming: { theme }, data }) => {

  return (
    <View style={styles.main}>
      <View style={styles.mainChild}>

        <TouchableOpacity>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0, 0.7, 0.7]}
            colors={data.gradients.reverse()}
            style={styles.cardActions}
            useAngle={true}>
            <Icon name="call-made" color={theme.defaultActiveIcon} size={20} style={{ color: 'white' }} />
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0, 0.7, 0.7]}
            colors={data.gradients.reverse()}
            style={styles.cardActions}
            useAngle={true}
          >
            <Icon name="call-received" color={theme.defaultActiveIcon} size={20} style={{ color: 'white' }} />
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0, 0.7, 0.7]}
            colors={data.gradients.reverse()}
            style={styles.cardActions}
            useAngle={true}>

            <View style={{ width: 24 }}>
              <Arrows />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(CardsRedirect);
