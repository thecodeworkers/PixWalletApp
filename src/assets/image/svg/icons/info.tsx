import React from 'react';
import { SvgXml } from 'react-native-svg';

const InfoIcon = () => {
		const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20">
    <path id="bxs-message-alt-error_1_" data-name="bxs-message-alt-error (1)" d="M3,4V16a2,2,0,0,0,2,2H8.5L12,22l3.5-4H19a2,2,0,0,0,2-2V4a2,2,0,0,0-2-2H5A2,2,0,0,0,3,4Zm8,1h2v6H11Zm0,8h2v2H11Z" transform="translate(-3 -2)" fill="#008DE4"/>
    </svg> 
  `
 		return (
				<SvgXml xml={logo} width='100%' height={'100%'}/>
		);
}

export default InfoIcon;