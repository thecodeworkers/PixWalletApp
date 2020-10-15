import React from 'react';
import { SvgXml } from 'react-native-svg';

const EthDiamond = () => {
		const logo = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="208.476" height="190.285" viewBox="0 0 208.476 190.285">
    <defs>
      <linearGradient id="linear-gradient" x1="0.138" y1="0.177" x2="1.107" y2="1.183" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#fbfbfb"/>
        <stop offset="1" stop-color="#444457"/>
      </linearGradient>
      <filter id="Trazado_386" x="8.946" y="0" width="190.285" height="190.285" filterUnits="userSpaceOnUse">
        <feOffset dy="20" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="15" result="blur"/>
        <feFlood flood-color="#aeaee6" flood-opacity="0.141"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <linearGradient id="linear-gradient-2" x1="0.138" y1="0.177" x2="1.107" y2="1.183" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#fbfbfb"/>
        <stop offset="1" stop-color="#444457" stop-opacity="0.129"/>
      </linearGradient>
      <filter id="Trazado_387" x="0" y="0" width="190.285" height="190.285" filterUnits="userSpaceOnUse">
        <feOffset dy="20" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="15" result="blur-2"/>
        <feFlood flood-color="#aeaee6" flood-opacity="0.741"/>
        <feComposite operator="in" in2="blur-2"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <filter id="Trazado_545" x="18.194" y="0.001" width="190.282" height="190.282" filterUnits="userSpaceOnUse">
        <feOffset dy="20" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="15" result="blur-3"/>
        <feFlood flood-color="#aeaee6" flood-opacity="0.741"/>
        <feComposite operator="in" in2="blur-3"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <linearGradient id="linear-gradient-4" x1="0.925" y1="0.965" x2="0.087" y2="0.113" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#304352"/>
        <stop offset="1" stop-color="#aeaee6"/>
      </linearGradient>
    </defs>
    <g id="Grupo_559" data-name="Grupo 559" transform="translate(55.993 25.175)">
      <g id="Grupo_197" data-name="Grupo 197" transform="translate(-11 0)">
        <g transform="matrix(1, 0, 0, 1, -44.99, -25.17)" filter="url(#Trazado_386)">
          <path id="Trazado_386-2" data-name="Trazado 386" d="M2.485,0l66.292-.12a2.474,2.474,0,0,1,2.481,2.481L71.14,67.711a2.5,2.5,0,0,1-2.49,2.49l-66.292.12A2.474,2.474,0,0,1-.123,67.839L0,2.485A2.5,2.5,0,0,1,2.485,0Z" transform="translate(103.76 25.17) rotate(45)" fill="url(#linear-gradient)"/>
        </g>
        <g transform="matrix(1, 0, 0, 1, -44.99, -25.17)" filter="url(#Trazado_387)">
          <path id="Trazado_387-2" data-name="Trazado 387" d="M2.485,0l66.292-.12a2.474,2.474,0,0,1,2.481,2.481L71.14,67.711a2.5,2.5,0,0,1-2.49,2.49l-66.292.12A2.474,2.474,0,0,1-.123,67.839L0,2.485A2.5,2.5,0,0,1,2.485,0Z" transform="translate(94.81 25.17) rotate(45)" fill="url(#linear-gradient-2)"/>
        </g>
        <g transform="matrix(1, 0, 0, 1, -44.99, -25.17)" filter="url(#Trazado_545)">
          <path id="Trazado_545-2" data-name="Trazado 545" d="M3.005-.005,68.257-.123a2.992,2.992,0,0,1,3,3L71.141,67.19A3.019,3.019,0,0,1,68.13,70.2l-65.251.118a2.992,2.992,0,0,1-3-3L-.005,3.005A3.019,3.019,0,0,1,3.005-.005Z" transform="translate(113 25.17) rotate(45)" fill="url(#linear-gradient-2)"/>
        </g>
        <path id="Trazado_546" data-name="Trazado 546" d="M3.006-.005,67.321-.123a2.992,2.992,0,0,1,3,3L70.2,66.254a3.019,3.019,0,0,1-3.011,3.011l-64.315.118a2.992,2.992,0,0,1-3-3L-.005,3.006A3.019,3.019,0,0,1,3.006-.005Z" transform="translate(59.425 0.662) rotate(45)" fill="url(#linear-gradient-4)"/>
      </g>
      <g id="Grupo_838" data-name="Grupo 838" transform="translate(39.156 36.593)">
        <path id="Trazado_106" data-name="Trazado 106" d="M332.893,315.548l-8.985-5.3,8.985,12.62h0l8.984-12.62Z" transform="translate(-323.908 -293.634)" fill="#fff"/>
        <path id="Trazado_107" data-name="Trazado 107" d="M332.9,71.351h0l8.984-5.314L332.9,51.131h0l-8.984,14.906,8.984,5.314Z" transform="translate(-323.911 -51.13)" fill="#fff"/>
      </g>
    </g>
  </svg>
  
  `
 		return (
				<SvgXml xml={logo}/>
		);
}

export default EthDiamond;