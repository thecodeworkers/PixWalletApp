import React, { FC } from 'react';
import { connect } from 'react-redux';
import { DefaultProps } from '../../../../../types';
import {FiatTransactionType} from '../../../../../components'

const Main: FC<DefaultProps> = ({ theming: { theme } }) => {
  return (
    <>
    <FiatTransactionType routeOne={'internalTransaction'} routeTwo={'bank'} routeThree={''}  />
    </>
  );
}


const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(Main);