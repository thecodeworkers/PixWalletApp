import React, { FC } from 'react';
import { SvgXml } from 'react-native-svg';

const Exchange = () => {
  const figure = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="14" viewBox="0 0 18 14">
  <defs>
    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#45b649"/>
      <stop offset="1" stop-color="#dce35b"/>
    </linearGradient>
  </defs>
  <g id="Group_938" data-name="Group 938" transform="translate(-180.148 -317.874)">
    <g id="Down_arrow" data-name="Down arrow" transform="translate(189.148 331.874) rotate(-90)">
      <path id="Path_10" data-name="Path 10" d="M4.5,0,3.682.818l3.1,3.1H0V5.084H6.779l-3.1,3.1L4.5,9,9,4.5l-.785-.785Z" transform="translate(9) rotate(90)" fill="url(#linear-gradient)"/>
    </g>
    <g id="Down_arrow-2" data-name="Down arrow" transform="translate(189.148 317.874) rotate(90)">
      <path id="Path_10-2" data-name="Path 10" d="M4.5,0,3.682.818l3.1,3.1H0V5.084H6.779l-3.1,3.1L4.5,9,9,4.5l-.785-.785Z" transform="translate(9) rotate(90)" fill="url(#linear-gradient)"/>
    </g>
  </g>
</svg>

`;

  return (
    <SvgXml xml={figure} width="100%" height="100%"></SvgXml>
  );
}

export default Exchange;
