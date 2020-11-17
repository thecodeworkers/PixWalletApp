import React from 'react';
import { BtcSquare, EthSquare, DashSquare, UsdSquare } from '../../assets/image/svg';

const ActivityCard = ({name}: any) => {
    switch(name) {
      case 'BTC':
      return <BtcSquare />

      case 'ETH':
      return <EthSquare />

      case 'DASH':
      return <DashSquare />

      case 'USD':
      return <UsdSquare />

      default:
      return <BtcSquare />
    }
};

export default ActivityCard;
