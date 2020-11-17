import React from 'react';
import { SvgXml } from 'react-native-svg';

const DiagonalUp = ({color = '#57D6AF'}: any) => {
  const figure = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20.136" height="19.617" viewBox="0 0 20.136 19.617">
   <path id="bxs-left-arrow-alt" d="M5,12l7,6V13l9.217.1v-2L12,11V6Z" transform="matrix(-0.766, 0.643, -0.643, -0.766, 27.823, 10.575)" fill=${color}/>
  </svg>
`;

  return (
    <SvgXml xml={figure} width="100%" height="100%"></SvgXml>
  );
}

export default DiagonalUp;
