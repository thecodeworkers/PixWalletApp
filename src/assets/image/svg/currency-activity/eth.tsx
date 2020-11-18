import React from 'react';
import { SvgXml } from 'react-native-svg';

const EthSquare = () => {
  const figure = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="136" height="136" viewBox="0 0 136 136">
  <defs>
    <linearGradient id="linear-gradient" x1="0.513" y1="0.424" x2="0.052" y2="0.953" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="1" stop-color="#9d84d5"/>
    </linearGradient>
    <filter id="Rectángulo_1491" x="0" y="0" width="136" height="136" filterUnits="userSpaceOnUse">
      <feOffset dx="3" dy="6" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feFlood flood-color="#62698d" flood-opacity="0.2"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Grupo_242" data-name="Grupo 242" transform="translate(-123 -94)">
    <g transform="matrix(1, 0, 0, 1, 123, 94)" filter="url(#Rectángulo_1491)">
      <rect id="Rectángulo_1491-2" data-name="Rectángulo 1491" width="100" height="100" rx="5" transform="translate(15 12)" fill="url(#linear-gradient)"/>
    </g>
    <rect id="Rectángulo_1569" data-name="Rectángulo 1569" width="98" height="98" rx="5" transform="translate(140 106)" fill="#fefefe"/>
    <g id="Grupo_214" data-name="Grupo 214" transform="translate(176.675 135.076)">
      <path id="Trazado_106" data-name="Trazado 106" d="M336.451,317.646l-12.542-7.4,12.542,17.617h0l12.542-17.617Z" transform="translate(-323.908 -287.055)" fill="#444457"/>
      <path id="Trazado_107" data-name="Trazado 107" d="M336.453,79.358h0l12.542-7.419L336.453,51.131h0L323.911,71.939l12.542,7.419Z" transform="translate(-323.911 -51.13)" fill="#444457"/>
    </g>
  </g>
</svg>
`;

  return (
    <SvgXml xml={figure} width="100%" height="100%"></SvgXml>
  );
}

export default EthSquare;
