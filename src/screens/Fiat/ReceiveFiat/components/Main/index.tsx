import React, { FC } from 'react';
import { connect } from 'react-redux';
import { DefaultProps } from '../../../../../types';
import {FiatTransactionType} from '../../../../../components'

const ReceiveFiat: FC<DefaultProps> = ({ theming: { theme } }) => {
  return (
    <>
    <FiatTransactionType />
    </>
  );
}


const mapStateToProps = ({ theming }: DefaultProps): DefaultProps => ({ theming })

export default connect(mapStateToProps)(ReceiveFiat);