import React from 'react';
import { SvgXml } from 'react-native-svg';

const PixIcon = () => {
		const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
    <g id="Group_858" data-name="Group 858" transform="translate(0.15 -0.31)">
      <rect id="Rectangle_180" data-name="Rectangle 180" width="3" height="3" transform="translate(14.85 8.31)" fill="#35a7d6"/>
      <rect id="Rectangle_181" data-name="Rectangle 181" width="2" height="8" transform="translate(17.85 0.31)" fill="#35a7d6"/>
      <rect id="Rectangle_182" data-name="Rectangle 182" width="3" height="3" transform="translate(1.85 8.31)" fill="#35a7d6"/>
      <rect id="Rectangle_183" data-name="Rectangle 183" width="2" height="8" transform="translate(-0.15 0.31)" fill="#35a7d6"/>
      <rect id="Rectangle_184" data-name="Rectangle 184" width="2" height="5" transform="translate(8.85 14.31)" fill="#35a7d6"/>
      <path id="Path_201" data-name="Path 201" d="M552,873v10.564h10.564V873Zm7.043,7.043h-3.521v-3.521h3.521Z" transform="translate(-547.466 -868.707)" fill="#35a7d6"/>
    </g>
  </svg>
  `
 		return (
				<SvgXml xml={logo} width='100%' height={'100%'}/>
		);
}

export default PixIcon;