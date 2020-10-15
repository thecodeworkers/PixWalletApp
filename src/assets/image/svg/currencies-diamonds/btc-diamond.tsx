import React from 'react';
import { SvgXml } from 'react-native-svg';

const BtcDiamond = () => {
		const logo = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="208.491" height="190.498" viewBox="0 0 208.491 190.498">
    <defs>
      <linearGradient id="linear-gradient" x1="0.138" y1="0.177" x2="1.107" y2="1.183" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#fbfbfb"/>
        <stop offset="1" stop-color="#ff8008"/>
      </linearGradient>
      <filter id="Rectángulo_1577" x="8.996" y="0" width="190.498" height="190.498" filterUnits="userSpaceOnUse">
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
      <filter id="Rectángulo_1686" x="0" y="0" width="190.498" height="190.498" filterUnits="userSpaceOnUse">
        <feOffset dy="20" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="15" result="blur-2"/>
        <feFlood flood-color="#ff8008" flood-opacity="0.188"/>
        <feComposite operator="in" in2="blur-2"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <filter id="Rectángulo_1687" x="17.993" y="0" width="190.498" height="190.498" filterUnits="userSpaceOnUse">
        <feOffset dy="20" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="15" result="blur-3"/>
        <feFlood flood-color="#ff8008" flood-opacity="0.188"/>
        <feComposite operator="in" in2="blur-3"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <linearGradient id="linear-gradient-4" x1="0.925" y1="0.965" x2="0.087" y2="0.113" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#ffc837"/>
        <stop offset="1" stop-color="#ff8008"/>
      </linearGradient>
    </defs>
    <g id="Grupo_928" data-name="Grupo 928" transform="translate(56 25)">
      <g id="Grupo_926" data-name="Grupo 926">
        <g id="Grupo_197" data-name="Grupo 197" transform="translate(-11)">
          <g transform="matrix(1, 0, 0, 1, -45, -25)" filter="url(#Rectángulo_1577)">
            <rect id="Rectángulo_1577-2" data-name="Rectángulo 1577" width="71.533" height="70.592" rx="3" transform="translate(103.91 25) rotate(45)" fill="url(#linear-gradient)"/>
          </g>
          <g transform="matrix(1, 0, 0, 1, -45, -25)" filter="url(#Rectángulo_1686)">
            <rect id="Rectángulo_1686-2" data-name="Rectángulo 1686" width="71.533" height="70.592" rx="3" transform="translate(94.92 25) rotate(45)" fill="url(#linear-gradient-2)"/>
          </g>
          <g transform="matrix(1, 0, 0, 1, -45, -25)" filter="url(#Rectángulo_1687)">
            <rect id="Rectángulo_1687-2" data-name="Rectángulo 1687" width="71.533" height="70.592" rx="3" transform="translate(112.91 25) rotate(45)" fill="url(#linear-gradient-2)"/>
          </g>
          <rect id="Rectángulo_1578" data-name="Rectángulo 1578" width="70.592" height="69.651" rx="3" transform="translate(59.578 0.666) rotate(45)" fill="url(#linear-gradient-4)"/>
        </g>
      </g>
      <path id="symbol" d="M145.87,100.583c.445-2.975-1.82-4.574-4.918-5.641l1-4.03L139.5,90.3l-.978,3.924c-.645-.161-1.307-.312-1.965-.463l.985-3.95-2.452-.611-1.005,4.029c-.534-.122-1.058-.242-1.567-.368l0-.013L129.141,92l-.653,2.62s1.82.417,1.782.443a1.305,1.305,0,0,1,1.143,1.427l-1.145,4.591a2.029,2.029,0,0,1,.255.082l-.259-.064-1.6,6.432a.893.893,0,0,1-1.124.583c.024.036-1.783-.445-1.783-.445l-1.218,2.808,3.192.8c.594.149,1.176.3,1.749.451l-1.015,4.076,2.45.611,1.005-4.033c.669.182,1.319.349,1.955.507l-1,4.014,2.453.611,1.015-4.069c4.183.792,7.329.472,8.653-3.311,1.067-3.046-.053-4.8-2.254-5.95a3.912,3.912,0,0,0,3.132-3.6Zm-5.605,7.86c-.758,3.046-5.887,1.4-7.55.987l1.347-5.4C135.724,104.444,141.057,105.266,140.264,108.443Zm.759-7.9c-.692,2.771-4.961,1.363-6.346,1.018l1.221-4.9C137.284,97,141.744,97.648,141.023,100.539Z" transform="translate(-86.906 -51.604)" fill="#fff"/>
    </g>
  </svg>
  
  `
 		return (
				<SvgXml xml={logo} />
		);
}

export default BtcDiamond;