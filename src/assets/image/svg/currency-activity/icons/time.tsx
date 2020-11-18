import React from 'react';
import { SvgXml } from 'react-native-svg';

const Time = () => {
  const figure = `
  <svg id="Time" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
    <path id="Trazado_13" data-name="Trazado 13" d="M1.95,1.95A5.9,5.9,0,0,1,6.5,0a5.9,5.9,0,0,1,4.55,1.95A5.9,5.9,0,0,1,13,6.5a5.9,5.9,0,0,1-1.95,4.55A5.9,5.9,0,0,1,6.5,13a5.9,5.9,0,0,1-4.55-1.95A6.487,6.487,0,0,1,0,6.5,5.9,5.9,0,0,1,1.95,1.95ZM9.425,9.425l.758-.758L7.475,5.958,6.5,1.625H5.417V6.5a.983.983,0,0,0,.325.758.378.378,0,0,0,.217.108Z" fill="#2699fb"/>
  </svg>
`;

  return (
    <SvgXml xml={figure} width="100%" height="100%"></SvgXml>
  );
}

export default Time;
