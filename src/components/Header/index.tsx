import React, { FC } from 'react';
import { View, Text, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { i18n } from '../../utils';
import styles from './styles';
import { connect } from 'react-redux';
import { DefaultProps } from '../../types';
import { HeaderProps } from './interfase';

const Header: FC<DefaultProps & HeaderProps> = ({ theming: { theme }, colorRight, colorLeft, title , route}   ) => {

    const platform = Platform.OS;
    const navigation = useNavigation();

    return (
            <View style={colorRight || colorLeft ? styles.header : styles.noIcons}>
            {
                 colorLeft
                    ? <Icon name="arrow-back-outline" style={platform == 'ios' ? styles.ios : null } onPress={() => navigation.goBack()} color={colorLeft} size={30}></Icon>
                    : <Icon name="arrow-back-outline" color={theme.defaultCard} size={30}></Icon>
            }

            <Text style={[styles.title, { color: theme.screenText }]}>{i18n.t(title)}</Text>

            {
                colorRight
                    ? <Icon name="help-circle" size={32} color={colorRight} onPress={() => navigation.navigate(route)} ></Icon>
                    : <Icon name="help-circle" size={32} color={theme.background} ></Icon>
            }
        </View>

    )
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(Header);
