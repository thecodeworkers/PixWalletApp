import React from 'react';
import { SvgXml } from 'react-native-svg';

const BtcDiamond = () => {
		const logo = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="178.438" height="178.438" viewBox="0 0 178.438 178.438">
    <defs>
      <linearGradient id="linear-gradient" x1="0.138" y1="0.177" x2="1.107" y2="1.183" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#fbfbfb"/>
        <stop offset="1" stop-color="#ff8008"/>
      </linearGradient>
      <filter id="Rectangle_1577" x="0" y="0" width="178.438" height="178.438" filterUnits="userSpaceOnUse">
        <feOffset dy="20" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="15" result="blur"/>
        <feFlood flood-color="#ff8008" flood-opacity="0.188"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <linearGradient id="linear-gradient-2" x1="0.138" y1="0.177" x2="1.107" y2="1.183" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#fbfbfb"/>
        <stop offset="1" stop-color="#ff8008" stop-opacity="0.161"/>
      </linearGradient>
      <linearGradient id="linear-gradient-4" x1="-0.262" y1="0.126" x2="0.945" y2="0.951" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#ffc837"/>
        <stop offset="1" stop-color="#ff8008"/>
      </linearGradient>
    </defs>
    <g id="Group_559" data-name="Group 559" transform="translate(37.083 25)">
      <g id="Group_197" data-name="Group 197" transform="translate(0 0)">
        <g transform="matrix(1, 0, 0, 1, -37.08, -25)" filter="url(#Rectangle_1577)">
          <rect id="Rectangle_1577-2" data-name="Rectangle 1577" width="62.949" height="62.121" rx="3" transform="translate(88.93 25) rotate(45)" fill="url(#linear-gradient)"/>
        </g>
        <rect id="Rectangle_1686" data-name="Rectangle 1686" width="62.949" height="62.121" rx="3" transform="translate(43.926) rotate(45)" fill="url(#linear-gradient-2)"/>
        <path id="Path_625" data-name="Path 625" d="M3,0H59.949a3,3,0,0,1,3,3V59.121a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0Z" transform="translate(59.76) rotate(45)" fill="url(#linear-gradient-2)"/>
        <rect id="Rectangle_1578" data-name="Rectangle 1578" width="62.121" height="61.293" rx="3" transform="translate(52.429 0.586) rotate(45)" fill="url(#linear-gradient-4)"/>
      </g>
      <path id="symbol" d="M143.309,99.217c.392-2.618-1.6-4.026-4.327-4.964l.884-3.547-2.159-.538-.861,3.453c-.568-.141-1.15-.275-1.73-.407l.867-3.476-2.158-.538-.885,3.545c-.47-.107-.931-.213-1.379-.324l0-.011-2.977-.743-.574,2.306s1.6.367,1.568.39a1.149,1.149,0,0,1,1.006,1.256l-1.007,4.04a1.786,1.786,0,0,1,.224.072l-.228-.057-1.412,5.66a.786.786,0,0,1-.989.513c.022.031-1.569-.392-1.569-.392l-1.072,2.471,2.809.7c.523.131,1.035.268,1.539.4l-.893,3.587,2.156.538.885-3.549c.589.16,1.161.307,1.72.446l-.882,3.532,2.159.538.893-3.58c3.681.7,6.449.416,7.615-2.914.939-2.681-.047-4.227-1.984-5.236a3.443,3.443,0,0,0,2.756-3.17Zm-4.932,6.917c-.667,2.681-5.181,1.232-6.644.868l1.185-4.752C134.382,102.615,139.074,103.338,138.377,106.133Zm.668-6.955c-.609,2.439-4.366,1.2-5.584.9l1.075-4.31C135.754,96.067,139.679,96.634,139.045,99.178Z" transform="translate(-81.741 -56.116)" fill="#fff"/>
    </g>
  </svg>
  
  

  
  `
 		return (
				<SvgXml xml={logo} width={'100%'} height={'100%'} />
		);
}

export default BtcDiamond;