import React from 'react';
import { SvgXml } from 'react-native-svg';

const DashCard = () => {
  const figure = `
  <svg width="45" height="45" viewBox="0 0 45 45">
  <defs>
    <linearGradient id="linear-gradient" x1="0.045" y1="1" x2="1.131" y2="-0.184" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#008de4"/>
      <stop offset="1" stop-color="#03629b"/>
    </linearGradient>
  </defs>
  <g id="Grupo_927" data-name="Grupo 927" transform="translate(-26 -415.114)">
    <path id="Trazado_361" data-name="Trazado 361" d="M5,0H40a5,5,0,0,1,5,5V40a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V5A5,5,0,0,1,5,0Z" transform="translate(26 415.114)" fill="url(#linear-gradient)"/>
    <path id="Trazado_342" data-name="Trazado 342" d="M4.847,0H38.779a4.847,4.847,0,0,1,4.847,4.847V38.779a4.847,4.847,0,0,1-4.847,4.847H4.847A4.847,4.847,0,0,1,0,38.779V4.847A4.847,4.847,0,0,1,4.847,0Z" transform="translate(27.374 415.114)" fill="#fff"/>
    <g id="dash-5" transform="translate(90.056 370.117)">
      <g id="Grupo_352" data-name="Grupo 352" transform="translate(-51.272 57.51)">
        <path id="Trazado_347" data-name="Trazado 347" d="M264.062,218.1h-7.871l-.652,3.646,7.106.01c3.5,0,4.534,1.271,4.5,3.377a15.236,15.236,0,0,1-.685,3.5c-.539,1.577-1.647,3.38-5.8,3.373l-6.91,0-.655,3.649h7.855a10.935,10.935,0,0,0,5.2-.9c2.768-1.277,4.415-4.009,5.073-7.572.985-5.306-.24-9.082-7.163-9.082" transform="translate(-249.9 -218.1)" fill="#008de4"/>
        <path id="Trazado_348" data-name="Trazado 348" d="M159.791,426.8a2.32,2.32,0,0,0-2.552,2.156c-.256,1.065-.339,1.494-.339,1.494h8.061a2.32,2.32,0,0,0,2.552-2.156c.256-1.065.339-1.494.339-1.494Z" transform="translate(-156.9 -419.857)" fill="#008de4"/>
      </g>
    </g>
  </g>
</svg>
`;

  return (
    <SvgXml xml={figure} width="100%" height="100%"></SvgXml>
  );
}

export default DashCard;
