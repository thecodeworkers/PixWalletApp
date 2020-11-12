import React, { FC } from 'react';
import { TouchableOpacity, View, Text, Platform } from 'react-native';
import { GradientPlusAndroid, GradientPlusIos } from '../GradientPlusButton';
import { useNavigation } from '@react-navigation/native';
import { Theming } from '../../../../types';
import styles from './styles';

const CreateAccountButton: FC<Theming> = ({ theme }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('createAccount')} activeOpacity={0.8}>
      <View style={styles.plusButton}>
        {
          Platform.OS == 'ios' ? (
            <GradientPlusIos theme={theme}/>
          ) : (
            <GradientPlusAndroid theme={theme}/>
          )
        }
      </View>
      <View style={styles.textButtonContainer}>
        <Text style={[{ color: theme.screenText }, styles.textButton]}>Add new account</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CreateAccountButton;
