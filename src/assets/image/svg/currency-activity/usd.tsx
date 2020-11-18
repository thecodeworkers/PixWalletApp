import React from 'react';
import { SvgXml } from 'react-native-svg';

const UsdSquare = () => {
  const figure = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="157" height="157" viewBox="0 0 157 157">
  <defs>
    <linearGradient id="linear-gradient" x1="0.513" y1="0.424" x2="0.052" y2="0.953" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="1" stop-color="#dce35b"/>
    </linearGradient>
    <filter id="Rectángulo_1491" x="0" y="0" width="157" height="157" filterUnits="userSpaceOnUse">
      <feOffset dx="3" dy="6" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="9.5" result="blur"/>
      <feFlood flood-color="#45b649" flood-opacity="0.278"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Grupo_597" data-name="Grupo 597" transform="translate(-112.5 -75.5)">
    <g transform="matrix(1, 0, 0, 1, 112.5, 75.5)" filter="url(#Rectángulo_1491)">
      <rect id="Rectángulo_1491-2" data-name="Rectángulo 1491" width="100" height="100" rx="5" transform="translate(25.5 22.5)" fill="url(#linear-gradient)"/>
    </g>
    <rect id="Rectángulo_1569" data-name="Rectángulo 1569" width="98" height="98" rx="5" transform="translate(140 98)" fill="#fefefe"/>
    <path id="Trazado_220" data-name="Trazado 220" d="M32.929-216.7c0-.819-.007-1.5,0-2.176.037-3.347.395-3.61,3.676-3.623,2.129-.009,3.094.929,2.775,2.952-.358,2.274.568,3.266,2.691,4.019a9.252,9.252,0,0,1,5.851,6.676c.423,1.542-.141,2.574-1.775,2.71-2.139.178-4.093.331-5.243-2.373-1.228-2.888-7.592-3.417-9.706-1.1a3.667,3.667,0,0,0,1.134,5.811,15.424,15.424,0,0,0,3.185.9c1.92.41,3.88.652,5.78,1.135,4.833,1.23,7.547,4.038,7.868,7.979.442,5.423-1.638,9.428-6.485,11.271-2.536.965-3.662,2.117-3.336,4.892.256,2.176-1.5,2.322-3.145,2.315-1.619-.007-3.471-.076-3.19-2.256.39-3.021-.951-4.068-3.631-4.874a9.493,9.493,0,0,1-6.3-6.608c-.491-1.533-1-3.058,1.026-3.875,2.059-.831,4.666-.089,5.419,1.479,1.991,4.146,4.288,5.328,8.761,4.4,2.327-.48,3.8-1.806,3.972-4.339.171-2.579-1.329-3.735-3.552-4.232-2.5-.559-5.051-.891-7.516-1.558-5.241-1.42-7.686-4.332-7.9-9.1-.187-4.2,2.737-8.064,7.382-9.729C31.312-216.224,31.968-216.4,32.929-216.7Z" transform="translate(152.744 347.161)" fill="#45b649"/>
  </g>
</svg>
`;

  return (
    <SvgXml xml={figure} width="100%" height="100%"></SvgXml>
  );
}

export default UsdSquare;
