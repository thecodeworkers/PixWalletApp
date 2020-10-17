import React from 'react';
import { SvgXml } from 'react-native-svg';

const DiamondIcon = () => {
		const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16">
    <g id="bx-money" transform="translate(-2 -4)">
      <path id="Trazado_373" data-name="Trazado 373" d="M21,4H3A1,1,0,0,0,2,5V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V5A1,1,0,0,0,21,4ZM20,15a3,3,0,0,0-3,3H7a3,3,0,0,0-3-3V9A3,3,0,0,0,7,6H17a3,3,0,0,0,3,3Z" fill="#35a7d6"/>
      <path id="Trazado_374" data-name="Trazado 374" d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" fill="#35a7d6"/>
    </g>
  </svg>
  `
 		return (
				<SvgXml xml={logo} width='100%' height={'100%'}/>
		);
}

export default DiamondIcon;