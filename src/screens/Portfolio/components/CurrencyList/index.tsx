import React, { FC } from 'react';
import { StyleSheet, View, Text, StatusBar, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { DefaultProps } from '../../../../types';
import { connect } from 'react-redux';
import styles from './styles';


const CurrencyList: FC<DefaultProps | any> = ({ theming: { theme }, navigation }) => {

  const { background, defaultActiveIcon, veryLightGrey} = theme;

  return (
    <>
      <StatusBar barStyle={theme.statusBar} />
      <View style={[styles.container, { backgroundColor: background }]}>

        <View style={styles.inputParent}>
          <TextInput
            style={[styles.input, { borderColor: defaultActiveIcon}]}
            placeholder='Search'
            placeholderTextColor={veryLightGrey}
          />
          <Icon
            name='search'
            color={veryLightGrey}
            size={26}
            style={styles.icon}
          />
        </View>

        {/* <Text style={{ color: theme.screenText }}>Currency List</Text>
        <TouchableOpacity onPress={() => navigation.navigate('currencyActivity')}>
          <Text>Navigate</Text>
        </TouchableOpacity> */}

      </View>
    </>
  );
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(CurrencyList);
