import React from 'react';
import { SvgXml } from 'react-native-svg';

const BtcSymbol = () => {
		const logo = ` <svg id="dash-5" xmlns="http://www.w3.org/2000/svg" width="17.954" height="14.573" viewBox="0 0 17.954 14.573">
    <g id="Group_352" data-name="Group 352">
      <path id="Path_347" data-name="Path 347" d="M262.2,218.1h-6.535l-.541,3.027,5.9.008c2.906,0,3.765,1.055,3.74,2.8a12.651,12.651,0,0,1-.569,2.906c-.448,1.309-1.367,2.806-4.815,2.8l-5.737,0-.544,3.03h6.522a9.079,9.079,0,0,0,4.315-.746c2.3-1.061,3.665-3.328,4.212-6.287.818-4.406-.2-7.541-5.947-7.541" transform="translate(-250.443 -218.1)" fill="#008de4"/>
      <path id="Path_348" data-name="Path 348" d="M159.3,426.8a1.926,1.926,0,0,0-2.119,1.79c-.213.884-.282,1.24-.282,1.24h6.693a1.926,1.926,0,0,0,2.119-1.79c.213-.884.282-1.24.282-1.24Z" transform="translate(-156.9 -421.035)" fill="#008de4"/>
    </g>
  </svg>
  
   `
 		return (
				<SvgXml xml={logo} width={'100%'} height={'100%'} />
		);
}

export default BtcSymbol;