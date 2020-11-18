import React from 'react';
import { SvgXml } from 'react-native-svg';

const EthCard = () => {
  const figure = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="43.851" height="43.851" viewBox="0 0 43.851 43.851">
  <defs>
    <linearGradient id="linear-gradient" x1="0.123" y1="0.874" x2="0.914" y2="0.123" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#304352"/>
      <stop offset="1" stop-color="#aeaee6"/>
    </linearGradient>
  </defs>
  <g id="Grupo_943" data-name="Grupo 943" transform="translate(-96.149 -373.114)">
    <g id="Grupo_941" data-name="Grupo 941" transform="translate(-13 4)">
      <g id="Grupo_942" data-name="Grupo 942">
        <path id="Trazado_341" data-name="Trazado 341" d="M4.872,0H38.978a4.872,4.872,0,0,1,4.872,4.872V38.978a4.872,4.872,0,0,1-4.872,4.872H4.872A4.872,4.872,0,0,1,0,38.978V4.872A4.872,4.872,0,0,1,4.872,0Z" transform="translate(109.149 369.114)" fill="url(#linear-gradient)"/>
      </g>
    </g>
    <g id="Grupo_81" data-name="Grupo 81" transform="translate(110.675 381.554)">
      <path id="Trazado_106" data-name="Trazado 106" d="M332.043,315.046l-8.135-4.8,8.135,11.426h0l8.135-11.426Z" transform="translate(-323.908 -295.205)" fill="#fff"/>
      <path id="Trazado_107" data-name="Trazado 107" d="M332.046,69.439h0l8.135-4.812-8.135-13.5h0l-8.135,13.5,8.135,4.812Z" transform="translate(-323.911 -51.13)" fill="#fff"/>
    </g>
  </g>
</svg>`;

  return (
    <SvgXml xml={figure} width="100%" height="100%"></SvgXml>
  );
}

export default EthCard;
