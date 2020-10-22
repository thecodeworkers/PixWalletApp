import React, { FC, useState } from 'react';
import { StyleSheet, View, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DefaultProps } from '../../../../types';
import { connect } from 'react-redux';
import styles from './styles';


const CurrencyList: FC<DefaultProps | any> = ({ theming: { theme }, navigation }) => {

  const { background, defaultActiveIcon, veryLightGrey, defaultInactiveIcon } = theme;

  const [ selectedTab, setSelectedTab ] = useState(0);

  const selectedCard = (selected: number) => {

  };

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

        <View style={styles.tabParent}>
          <TouchableOpacity style={[styles.childTab, {backgroundColor: defaultActiveIcon}]} >
            <Text>Crypto</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.childTab, { backgroundColor: defaultInactiveIcon}]} >
            <Text>Fiat</Text>
          </TouchableOpacity>
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
