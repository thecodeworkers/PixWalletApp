import React, { FC } from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const Arrows = () => {
  const figure = `<svg width="18" height="14" viewBox="0 0 18 14">
  <g id="Grupo_925" data-name="Grupo 925" transform="translate(-180.148 -317.874)">
    <g id="Down_arrow" data-name="Down arrow" transform="translate(189.148 331.874) rotate(-90)">
      <path id="Trazado_10" data-name="Trazado 10" d="M4.5,0,3.682.818l3.1,3.1H0V5.084H6.779l-3.1,3.1L4.5,9,9,4.5l-.785-.785Z" transform="translate(9) rotate(90)" fill="#fefefe"/>
    </g>
    <g id="Down_arrow-2" data-name="Down arrow" transform="translate(189.148 317.874) rotate(90)">
      <path id="Trazado_10-2" data-name="Trazado 10" d="M4.5,0,3.682.818l3.1,3.1H0V5.084H6.779l-3.1,3.1L4.5,9,9,4.5l-.785-.785Z" transform="translate(9) rotate(90)" fill="#fefefe"/>
    </g>
  </g>
</svg>
`;

  return (
    <SvgXml xml={figure} width="100%" height="100%"></SvgXml>
  );
}

export default Arrows;
