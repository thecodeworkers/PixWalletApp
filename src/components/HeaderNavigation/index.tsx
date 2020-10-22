import React, { FC } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { DefaultProps } from 'src/types';
import Header from '../Header';

const HeaderNavigation: FC<any> = ({ scene, previous, navigation, theming: { theme } }) => {
  const { options } = scene.descriptor;
  const title: any =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <View style={{ backgroundColor: theme.background }}>
      <Header
        navigation={navigation}
        theme={theme}
        hasRightIcon={false}
        hasLeftIcon={previous ? true : false}
        title={title}
      />
    </View>
  )
}

const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(HeaderNavigation);
