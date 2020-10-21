import React from 'react';
import { SvgXml } from 'react-native-svg';

const CardIcon = () => {
		const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16">
    <path id="bxs-credit-card-front" d="M20,4H4A2,2,0,0,0,2,6V18a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V6A2,2,0,0,0,20,4ZM5,8.5A.5.5,0,0,1,5.5,8h3a.5.5,0,0,1,.5.5v2a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5ZM11,16H5V14h6Zm8,0H13V14h6Z" transform="translate(-2 -4)" fill="#35a7d6"/>
  </svg>
  `
 		return (
				<SvgXml xml={logo} width='100%' height={'100%'}/>
		);
}

export default CardIcon;