import React, { FC } from 'react';
import { SvgXml } from 'react-native-svg';

const PortfolioChart = (children: any) => {
    const figure = `<svg xmlns="http://www.w3.org/2000/svg" width="294.902" height="87.764" viewBox="0 0 294.902 87.764">
    <g id="Grupo_637" data-name="Grupo 637" transform="translate(-83.821 -80.761)">
      <path id="Trazado_267" data-name="Trazado 267" d="M-376-2913.842v-2.878h137.235v2.878Z" transform="translate(478.436 3082.365)" fill="#304352"/>
      <path id="Trazado_268" data-name="Trazado 268" d="M-418.029-2964.271a2.974,2.974,0,0,1-2.971-2.971l-.141-34.816h3.238l.141,31.938a2.974,2.974,0,0,0,2.971,2.971h12.276v2.878Z" transform="translate(505 3132.796)" fill="#0083b0"/>
      <path id="Trazado_266" data-name="Trazado 266" d="M-283.582-3017.476l-136.135-.005v-2.871l133.257-.828c1.638,0,2.971-1.715,2.971-3.824v-72c0-2.109-1.376-4.168-3.014-4.168l-147.865-.764v-3.3l150.786.239c1.638,0,2.971,1.715,2.971,3.823v79.876C-280.611-3019.191-281.944-3017.476-283.582-3017.476Z" transform="translate(659.335 3186)" fill="#f7931a"/>
      <path id="Trazado_265" data-name="Trazado 265" d="M-395.141-3058.263l-.038-46.787a3.115,3.115,0,0,1,3.15-2.95l137.972-.22v3.238l-134.734.22a2.975,2.975,0,0,0-2.971,2.971l-.141,43.528Z" transform="translate(479 3189)" fill="#45b649"/>
    </g>
  </svg>

`;

  return (
    <SvgXml xml={figure} width="100%" height="100%">{children}</SvgXml>
  );
}

export default PortfolioChart;
