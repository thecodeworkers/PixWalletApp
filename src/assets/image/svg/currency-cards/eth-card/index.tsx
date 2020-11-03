import React from 'react';
import { SvgXml } from 'react-native-svg';

const EthCard = () => {
  const figure = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="63" height="63" viewBox="0 0 63 63">
  <defs>
    <linearGradient id="linear-gradient" x1="0.987" y1="0.046" x2="0" y2="0.927" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#484848"/>
      <stop offset="1" stop-color="#aeaee6"/>
    </linearGradient>
    <filter id="Path_360" x="0" y="0" width="63" height="63" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-color="#ca92f5" flood-opacity="0.239"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-2" x1="0.123" y1="0.874" x2="0.914" y2="0.123" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#304352"/>
      <stop offset="1" stop-color="#aeaee6"/>
    </linearGradient>
  </defs>
  <g id="Group_942" data-name="Group 942" transform="translate(-38 -562.114)">
    <g id="Group_941" data-name="Group 941">
      <g transform="matrix(1, 0, 0, 1, 38, 562.11)" filter="url(#Path_360)">
        <path id="Path_360-2" data-name="Path 360" d="M5,0H40a5,5,0,0,1,5,5V40a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V5A5,5,0,0,1,5,0Z" transform="translate(9 6)" fill="url(#linear-gradient)"/>
      </g>
    </g>
    <g id="Group_938" data-name="Group 938">
      <g id="Group_939" data-name="Group 939">
        <path id="Path_341" data-name="Path 341" d="M4.872,0H38.978a4.872,4.872,0,0,1,4.872,4.872V38.978a4.872,4.872,0,0,1-4.872,4.872H4.872A4.872,4.872,0,0,1,0,38.978V4.872A4.872,4.872,0,0,1,4.872,0Z" transform="translate(48.149 568.114)" fill="url(#linear-gradient-2)"/>
        <g id="Group_81" data-name="Group 81" transform="translate(61.675 577.554)">
          <path id="Path_106" data-name="Path 106" d="M332.043,315.046l-8.135-4.8,8.135,11.426h0l8.135-11.426Z" transform="translate(-323.908 -295.205)" fill="#fff"/>
          <path id="Path_107" data-name="Path 107" d="M332.046,69.439h0l8.135-4.812-8.135-13.5h0l-8.135,13.5,8.135,4.812Z" transform="translate(-323.911 -51.13)" fill="#fff"/>
        </g>
      </g>
    </g>
  </g>
</svg>

`;
  return (
    <SvgXml xml={figure} width="100%" height="100%"></SvgXml>
  );
}

export default EthCard;
