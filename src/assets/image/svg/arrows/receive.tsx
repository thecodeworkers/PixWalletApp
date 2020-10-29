import React, { FC } from 'react';
import { SvgXml } from 'react-native-svg';

const Receive = () => {
  const figure = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14.142" height="14.142" viewBox="0 0 14.142 14.142">
  <defs>
    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#45b649"/>
      <stop offset="1" stop-color="#dce35b"/>
    </linearGradient>
  </defs>
  <g id="Down_arrow" data-name="Down arrow" transform="translate(0 7.071) rotate(-45)">
    <path id="Path_10" data-name="Path 10" d="M5,0,4.091.909,7.532,4.351H0v1.3H7.532L4.091,9.091,5,10l5-5-.872-.872Z" transform="translate(10) rotate(90)" fill="url(#linear-gradient)"/>
  </g>
</svg>

`;

  return (
    <SvgXml xml={figure} width="100%" height="100%"></SvgXml>
  );
}

export default Receive;
