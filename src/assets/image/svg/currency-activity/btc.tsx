import React from 'react';
import { SvgXml } from 'react-native-svg';

const BtcSquare = () => {
  const figure = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="136" height="136" viewBox="0 0 136 136">
  <defs>
    <linearGradient id="linear-gradient" x1="0.042" y1="0.969" x2="0.536" y2="0.461" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#f7931a"/>
      <stop offset="1" stop-color="#fff"/>
    </linearGradient>
    <filter id="Rectángulo_1491" x="0" y="0" width="136" height="136" filterUnits="userSpaceOnUse">
      <feOffset dx="3" dy="6" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feFlood flood-color="#f7931a" flood-opacity="0.188"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Grupo_191" data-name="Grupo 191" transform="translate(-123 -94)">
    <g transform="matrix(1, 0, 0, 1, 123, 94)" filter="url(#Rectángulo_1491)">
      <rect id="Rectángulo_1491-2" data-name="Rectángulo 1491" width="100" height="100" rx="5" transform="translate(15 12)" fill="url(#linear-gradient)"/>
    </g>
    <rect id="Rectángulo_1568" data-name="Rectángulo 1568" width="97" height="97" rx="5" transform="translate(141 106)" fill="#fff"/>
    <path id="symbol" d="M160.027,108.136c.74-4.949-3.028-7.61-8.181-9.385l1.671-6.7-4.081-1.017-1.627,6.528c-1.073-.267-2.175-.52-3.27-.77l1.639-6.571L142.1,89.2l-1.673,6.7c-.888-.2-1.76-.4-2.606-.613l0-.021L132.2,93.863l-1.086,4.359s3.028.694,2.964.737a2.172,2.172,0,0,1,1.9,2.374l-1.9,7.638a3.383,3.383,0,0,1,.424.136c-.136-.034-.281-.071-.431-.107L131.4,119.7a1.486,1.486,0,0,1-1.87.969c.041.059-2.966-.74-2.966-.74l-2.026,4.672,5.311,1.324c.988.248,1.956.507,2.909.751l-1.689,6.781,4.076,1.017,1.673-6.709c1.114.3,2.195.581,3.252.844l-1.667,6.678,4.081,1.017,1.689-6.768c6.959,1.317,12.192.786,14.395-5.508,1.775-5.068-.088-7.991-3.75-9.9,2.667-.615,4.675-2.369,5.211-5.992ZM150.7,121.212c-1.261,5.068-9.794,2.328-12.561,1.641l2.241-8.984C143.149,114.56,152.02,115.926,150.7,121.212Zm1.262-13.149c-1.151,4.61-8.253,2.268-10.557,1.694l2.032-8.148C145.744,102.183,153.163,103.254,151.965,108.063Z" transform="translate(45.41 43.699)" fill="#f7931a"/>
  </g>
</svg>
`;
  return (
    <SvgXml xml={figure} width="100%" height="100%"></SvgXml>
  );
}

export default BtcSquare;
