import React, { FC } from 'react';
import { Text, View, FlatList } from 'react-native';
import { DefaultProps } from '../../types';
import styles from './styles';
import { connect } from 'react-redux';
import  ListItem  from './components/ListItem';
import { UsdCard, BtcCard, EthCard, DashCard } from '../../assets/image/svg';

const DATA = [
    {
       "active":true,
       "color":"#45B649",
       "gradients":["#45B649", "#45B649", "#DCE35B"],
       "icon":<UsdCard/>,
       "id":"5f8e3d112c3795c5ce88991b",
      //  "line":<UsdLine/>,
       "name":"Dollar",
       "price":1,
       "symbol":"USD",
       "type":"FIAT"
    },
    {
       "active":true,
       "color":"#F7931A",
       "gradients":["#FF8008", "#FF8008", "#FFC837"],
       "icon":<BtcCard/>,
       "id":"5f8e3d8b2c3795c5ce88991c",
      //  "line":<UsdLine/>,
       "name":"Bitcoin",
       "price":1,
       "symbol":"BTC",
       "type":"CRYPTO"
    },
    {
       "active":true,
       "color":"#444457",
       "gradients": ["#304352", "#304352", "#AEAEE6"],
       "icon":<EthCard/>,
       "id":"5f8e3dc12c3795c5ce88991d",
      //  "line":<EthLine />,
       "name":"Ethereum",
       "price":1,
       "symbol":"ETH",
       "type":"CRYPTO"
    },
    {
       "active":true,
       "color":"#008DE4",
       "gradients":["#03629B", "#03629B", "#008DE4"],
       "icon":<DashCard/>,
       "id":"5f8e3dfd2c3795c5ce88991e",
      //  "line":<DashLine/>,
       "name":"Dash",
       "price":1,
       "symbol":"DASH",
       "type":"CRYPTO"
    }
 ];

const Currency: FC<DefaultProps> = ({theming: { theme }})  => {
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        style={{ marginTop: '5%' }}
        data={DATA}
        renderItem={props => <ListItem theme={theme} {...props} onPress={(index: any) => console.log(index)} />}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  )
};

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(Currency);

