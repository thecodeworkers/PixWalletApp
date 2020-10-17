import React from 'react';
import { SvgXml } from 'react-native-svg';

const DiamondIcon = () => {
		const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16.51" viewBox="0 0 17 16.51">
    <path id="bxs-diamond" d="M14.278,3H6.722A.844.844,0,0,0,6,3.419L3.063,8.351H17.938L15,3.419A.844.844,0,0,0,14.278,3ZM9.871,19.218a.823.823,0,0,0,1.258,0L19,10.134H2Z" transform="translate(-2 -3)" fill="#35a7d6"/>
  </svg>
  
  `
 		return (
				<SvgXml xml={logo} width='100%' height={'100%'}/>
		);
}

export default DiamondIcon;