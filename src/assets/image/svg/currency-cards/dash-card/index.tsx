import React from 'react';
import { SvgXml } from 'react-native-svg';

const DashCard = () => {
  const figure = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="63" height="63" viewBox="0 0 63 63">
  <defs>
    <linearGradient id="linear-gradient" x1="0.076" y1="0.936" x2="0.939" y2="0.048" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#008de4"/>
      <stop offset="1" stop-color="#03629b"/>
    </linearGradient>
    <filter id="Path_361" x="0" y="0" width="63" height="63" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-color="#35a7d6" flood-opacity="0.188"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-2" x1="0.123" y1="0.874" x2="0.914" y2="0.123" gradientUnits="objectBoundingBox">
    <stop offset="0" stop-color="#008de4"/>
    <stop offset="1" stop-color="#03629b"/>
  </linearGradient>
  </defs>
  <g id="Group_830" data-name="Group 830" transform="translate(-38 -654.114)">
    <g transform="matrix(1, 0, 0, 1, 38, 654.11)" filter="url(#Path_361)">
      <path id="Path_361-2" data-name="Path 361" d="M5,0H40a5,5,0,0,1,5,5V40a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V5A5,5,0,0,1,5,0Z" transform="translate(9 6)" fill="url(#linear-gradient)"/>
    </g>
    <path id="Path_342" data-name="Path 342" d="M4.847,0H38.779a4.847,4.847,0,0,1,4.847,4.847V38.779a4.847,4.847,0,0,1-4.847,4.847H4.847A4.847,4.847,0,0,1,0,38.779V4.847A4.847,4.847,0,0,1,4.847,0Z" transform="translate(48.374 660.114)" fill="url(#linear-gradient-2)"/>
    <g id="dash-5" transform="translate(110.056 616.117)">
      <g id="Group_352" data-name="Group 352" transform="translate(-51.272 57.51)">
        <path id="Path_347" data-name="Path 347" d="M264.062,218.1h-7.871l-.652,3.646,7.106.01c3.5,0,4.534,1.271,4.5,3.377a15.236,15.236,0,0,1-.685,3.5c-.539,1.577-1.647,3.38-5.8,3.373l-6.91,0-.655,3.649h7.855a10.935,10.935,0,0,0,5.2-.9c2.768-1.277,4.415-4.009,5.073-7.572.985-5.306-.24-9.082-7.163-9.082" transform="translate(-249.9 -218.1)" fill="#f4f4f4"/>
        <path id="Path_348" data-name="Path 348" d="M159.791,426.8a2.32,2.32,0,0,0-2.552,2.156c-.256,1.065-.339,1.494-.339,1.494h8.061a2.32,2.32,0,0,0,2.552-2.156c.256-1.065.339-1.494.339-1.494Z" transform="translate(-156.9 -419.857)" fill="#f4f4f4"/>
      </g>
    </g>
  </g>
</svg>

 
`;

  return (
    <SvgXml xml={figure} width="100%" height="100%"></SvgXml>
  );
}

export default DashCard;
