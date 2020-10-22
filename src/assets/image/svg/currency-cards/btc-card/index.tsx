import React from 'react';
import { SvgXml } from 'react-native-svg';

const BtcCard = () => {
  const figure = `
  <svg width="45" height="45" viewBox="0 0 45 45">
  <defs>
    <linearGradient id="linear-gradient-btc-line" x1="0.049" y1="0.938" x2="1.03" y2="-0.055" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#ffc837"/>
      <stop offset="1" stop-color="#ff8008"/>
    </linearGradient>
  </defs>
  <g id="Grupo_928" data-name="Grupo 928" transform="translate(-32 -256.114)">
    <path id="Trazado_340" data-name="Trazado 340" d="M5,0H40a5,5,0,0,1,5,5V40a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V5A5,5,0,0,1,5,0Z" transform="translate(32 256.114)" fill="url(#linear-gradient-btc-line)"/>
    <path id="Trazado_359" data-name="Trazado 359" d="M4.889,0H39.111A4.889,4.889,0,0,1,44,4.889V39.111A4.889,4.889,0,0,1,39.111,44H4.889A4.889,4.889,0,0,1,0,39.111V4.889A4.889,4.889,0,0,1,4.889,0Z" transform="translate(33 256.114)" fill="#fff"/>
    <path id="symbol" d="M144.175,99.678c.41-2.739-1.676-4.211-4.527-5.193l.925-3.71-2.258-.563-.9,3.612c-.594-.148-1.2-.288-1.809-.426l.907-3.636-2.257-.563-.926,3.709c-.491-.112-.974-.223-1.442-.339l0-.012-3.114-.778-.6,2.412s1.676.384,1.64.408a1.2,1.2,0,0,1,1.052,1.313l-1.054,4.226a1.869,1.869,0,0,1,.235.075l-.239-.059-1.477,5.921a.822.822,0,0,1-1.035.536c.023.033-1.641-.41-1.641-.41l-1.121,2.585,2.939.733c.547.137,1.083.28,1.61.416l-.935,3.752,2.256.563.926-3.713c.616.167,1.214.322,1.8.467l-.922,3.7,2.258.563.935-3.745c3.851.729,6.747.435,7.965-3.048.982-2.8-.049-4.422-2.075-5.477a3.6,3.6,0,0,0,2.884-3.316Zm-5.16,7.235c-.7,2.8-5.42,1.288-6.95.908l1.24-4.971C134.835,103.233,139.744,103.989,139.015,106.914Zm.7-7.276c-.637,2.551-4.567,1.255-5.842.937L135,96.066C136.271,96.384,140.376,96.977,139.713,99.638Z" transform="translate(-79.643 175.333)" fill="#f7931a"/>
  </g>
</svg>

`;
  return (
    <SvgXml xml={figure} width="100%" height="100%"></SvgXml>
  );
}

export default BtcCard;
