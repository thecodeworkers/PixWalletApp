import React from 'react';
import { SvgXml } from 'react-native-svg';

const PixLogo = () => {
  const figure = `
  <svg width="21" height="17" viewBox="0 0 21 17">
  <g id="Grupo_544" data-name="Grupo 544" transform="translate(-0.334 0.353)">
    <rect id="Rectángulo_180" data-name="Rectángulo 180" width="3" height="3" transform="translate(15.334 6.647)" fill="#2699fb"/>
    <rect id="Rectángulo_181" data-name="Rectángulo 181" width="3" height="7" transform="translate(18.334 -0.353)" fill="#2699fb"/>
    <rect id="Rectángulo_182" data-name="Rectángulo 182" width="3" height="3" transform="translate(3.334 6.647)" fill="#2699fb"/>
    <rect id="Rectángulo_183" data-name="Rectángulo 183" width="3" height="7" transform="translate(0.334 -0.353)" fill="#2699fb"/>
    <rect id="Rectángulo_184" data-name="Rectángulo 184" width="3" height="5" transform="translate(9.334 11.647)" fill="#2699fb"/>
    <path id="Trazado_201" data-name="Trazado 201" d="M552,873v9.519h9.519V873Zm6.346,6.346h-3.173v-3.173h3.173Z" transform="translate(-546.02 -869.78)" fill="#2699fb"/>
  </g>
</svg>
`;

  return (
    <SvgXml xml={figure} width="100%" height="100%"></SvgXml>
  );
}

export default PixLogo;
