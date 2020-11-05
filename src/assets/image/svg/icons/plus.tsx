import React from 'react';
import { SvgXml } from 'react-native-svg';

export default () => {
  const plus = `
    <svg xmlns="http://www.w3.org/2000/svg" width="19.835" height="20.622" viewBox="0 0 19.835 20.622">
      <path id="bx-plus-medical" d="M16.031,3.11H11.014v7.66H3.844V16.1h7.17v7.633h5.017V16.1h7.647V10.77H16.031Z" transform="translate(-3.844 -3.11)" fill="#008de4"/>
    </svg>
  `;

  return (
    <SvgXml xml={plus} width="100%" height="100%"/>
  );
}
