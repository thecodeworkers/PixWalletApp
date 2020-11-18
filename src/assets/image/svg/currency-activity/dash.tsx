import React from 'react';
import { SvgXml } from 'react-native-svg';

const DashSquare = () => {
  const figure = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="136" height="136" viewBox="0 0 136 136">
  <defs>
    <linearGradient id="linear-gradient" x1="0.513" y1="0.424" x2="0.052" y2="0.953" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="1" stop-color="#03629b"/>
    </linearGradient>
    <filter id="Rectángulo_1491" x="0" y="0" width="136" height="136" filterUnits="userSpaceOnUse">
      <feOffset dx="3" dy="6" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feFlood flood-color="#62698d" flood-opacity="0.2"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Grupo_832" data-name="Grupo 832" transform="translate(-123 -87)">
    <g transform="matrix(1, 0, 0, 1, 123, 87)" filter="url(#Rectángulo_1491)">
      <rect id="Rectángulo_1491-2" data-name="Rectángulo 1491" width="100" height="100" rx="5" transform="translate(15 12)" fill="url(#linear-gradient)"/>
    </g>
    <rect id="Rectángulo_1569" data-name="Rectángulo 1569" width="98" height="98" rx="5" transform="translate(140 99)" fill="#fefefe"/>
    <g id="dash-5" transform="translate(220.271 78.798)">
      <g id="Grupo_352" data-name="Grupo 352" transform="translate(-51.272 57.51)">
        <path id="Trazado_347" data-name="Trazado 347" d="M271.954,218.1H258.416l-1.121,6.271,12.222.017c6.02,0,7.8,2.186,7.748,5.808a26.206,26.206,0,0,1-1.179,6.02c-.927,2.712-2.832,5.814-9.973,5.8l-11.885-.006-1.127,6.277h13.51c4.766,0,6.792-.555,8.938-1.545,4.761-2.2,7.593-6.9,8.726-13.023,1.694-9.127-.412-15.621-12.32-15.621" transform="translate(-247.595 -218.1)" fill="#008de4"/>
        <path id="Trazado_348" data-name="Trazado 348" d="M161.872,426.8c-3.548,0-4.057,2.312-4.389,3.708-.441,1.831-.584,2.569-.584,2.569h13.864c3.548,0,4.057-2.312,4.389-3.708.441-1.831.584-2.569.584-2.569Z" transform="translate(-156.9 -414.858)" fill="#008de4"/>
      </g>
    </g>
  </g>
</svg>
`;

  return (
    <SvgXml xml={figure} width="100%" height="100%"></SvgXml>
  );
}

export default DashSquare;
