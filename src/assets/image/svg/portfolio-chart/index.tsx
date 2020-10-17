import React, { FC } from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';


const PortfolioChart = (children: any) => {
  const figure = `<svg width="100%" height="100%" viewBox="0 0 206 206">
  <defs>
    <linearGradient id="linear-gradient" x1="1" y1="0.5" x2="0.079" y2="0.5" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#304352"/>
      <stop offset="1" stop-color="#aeaee6"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="0.911" y1="0.941" x2="0.097" y2="0.134" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#0083b0"/>
      <stop offset="1" stop-color="#00b4db"/>
    </linearGradient>
    <linearGradient id="linear-gradient-3" x1="-0.042" y1="-0.058" x2="0.949" y2="0.965" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#f7931a"/>
      <stop offset="1" stop-color="#f4cd4d"/>
    </linearGradient>
    <linearGradient id="linear-gradient-4" x1="0.037" y1="0.92" x2="0.848" y2="0.079" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#45b649"/>
      <stop offset="1" stop-color="#dce35b"/>
    </linearGradient>
  </defs>
  <g id="Grupo_926" data-name="Grupo 926" transform="translate(-158 -62)">
    <path id="Trazado_267" data-name="Trazado 267" d="M-376-2908v-8.72h60v8.72Z" transform="translate(592 3176)" fill="url(#linear-gradient)"/>
    <path id="Trazado_268" data-name="Trazado 268" d="M-412-2908a9.01,9.01,0,0,1-9-9v-75h9.809v66.28a9.01,9.01,0,0,0,9,9H-365v8.72Z" transform="translate(579 3176)" fill="url(#linear-gradient-2)"/>
    <path id="Trazado_266" data-name="Trazado 266" d="M-232-2899h-77v-8.72h68.279a9.01,9.01,0,0,0,9-9v-169.471a9.01,9.01,0,0,0-9-9H-309V-3105h77a9.01,9.01,0,0,1,9,9v188A9.01,9.01,0,0,1-232-2899Z" transform="translate(587 3167)" fill="url(#linear-gradient-3)"/>
    <path id="Trazado_265" data-name="Trazado 265" d="M-395-2988v-111a9.01,9.01,0,0,1,9-9h109v9.809h-99.191a9.01,9.01,0,0,0-9,9V-2988Z" transform="translate(553 3170)" fill="url(#linear-gradient-4)"/>
  </g>
</svg>

`;

  return (
    // <View>
        <SvgXml xml={figure} width="100%" height="100%">{children}</SvgXml>
  
    // </View>

  
  );
}

export default PortfolioChart;
