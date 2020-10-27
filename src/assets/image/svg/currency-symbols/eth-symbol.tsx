import React from 'react';
import { SvgXml } from 'react-native-svg';

const BtcSymbol = () => {
		const logo = ` <svg id="Group_855" data-name="Group 855" xmlns="http://www.w3.org/2000/svg" width="15.833" height="25.758" viewBox="0 0 15.833 25.758">
    <path id="Path_106" data-name="Path 106" d="M331.825,314.917l-7.916-4.67,7.916,11.119h0l7.916-11.119Z" transform="translate(-323.908 -295.609)" fill="#444457"/>
    <path id="Path_107" data-name="Path 107" d="M331.827,68.947h0l7.916-4.683-7.916-13.134h0l-7.916,13.134,7.916,4.683Z" transform="translate(-323.911 -51.13)" fill="#444457"/>
  </svg>
  
  
   `
 		return (
				<SvgXml xml={logo} width={'100%'} height={'100%'} />
		);
}

export default BtcSymbol;