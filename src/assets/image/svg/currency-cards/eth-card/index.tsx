import React from 'react';
import { SvgXml } from 'react-native-svg';

const EthCard = () => {
  const figure = `
  <svg width="45" height="45" viewBox="0 0 45 45">
  <defs>
    <linearGradient id="linear-gradient" x1="0.987" y1="0.046" x2="0" y2="0.927" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#484848"/>
      <stop offset="1" stop-color="#aeaee6"/>
    </linearGradient>
  </defs>
  <g id="Grupo_926" data-name="Grupo 926" transform="translate(-62 -364.114)">
    <path id="Trazado_360" data-name="Trazado 360" d="M5,0H40a5,5,0,0,1,5,5V40a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V5A5,5,0,0,1,5,0Z" transform="translate(62 364.114)" fill="url(#linear-gradient)"/>
    <path id="Trazado_341" data-name="Trazado 341" d="M4.872,0H38.978a4.872,4.872,0,0,1,4.872,4.872V38.978a4.872,4.872,0,0,1-4.872,4.872H4.872A4.872,4.872,0,0,1,0,38.978V4.872A4.872,4.872,0,0,1,4.872,0Z" transform="translate(63.149 364.114)" fill="#fff"/>
    <g id="Grupo_81" data-name="Grupo 81" transform="translate(76.675 372.553)">
      <path id="Trazado_106" data-name="Trazado 106" d="M332.043,315.046l-8.135-4.8,8.135,11.426h0l8.135-11.426Z" transform="translate(-323.908 -295.205)" fill="#444457"/>
      <path id="Trazado_107" data-name="Trazado 107" d="M332.046,69.439h0l8.135-4.812-8.135-13.5h0l-8.135,13.5,8.135,4.812Z" transform="translate(-323.911 -51.13)" fill="#444457"/>
    </g>
  </g>
</svg>
`;
  return (
    <SvgXml xml={figure} width="100%" height="100%"></SvgXml>
  );
}

export default EthCard;
