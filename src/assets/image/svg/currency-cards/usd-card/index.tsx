import React from 'react';
import { SvgXml } from 'react-native-svg';

const UsdCard = () => {
  const figure = ` <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="75" height="75" viewBox="0 0 75 75">
  <defs>
    <linearGradient id="linear-gradient" x1="0.752" y1="0.128" x2="0.059" y2="0.954" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#45b649"/>
      <stop offset="1" stop-color="#dce35b"/>
    </linearGradient>
    <filter id="Path_331" x="0" y="0" width="75" height="75" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feFlood flood-color="#dce35b" flood-opacity="0.322"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-2" x1="0.123" y1="0.874" x2="0.914" y2="0.123" gradientUnits="objectBoundingBox">
    <stop offset="0" stop-color="#45b649"/>
    <stop offset="1" stop-color="#dce35b"/>
  </linearGradient>
  </defs>
  <g id="Group_831" data-name="Group 831" transform="translate(-32 -356.114)">
    <g transform="matrix(1, 0, 0, 1, 32, 356.11)" filter="url(#Path_331)">
      <path id="Path_331-2" data-name="Path 331" d="M5,0H40a5,5,0,0,1,5,5V40a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V5A5,5,0,0,1,5,0Z" transform="translate(15 12)" fill="url(#linear-gradient)"/>
    </g>
    <path id="Path_356" data-name="Path 356" d="M4.876,0H39.01a4.876,4.876,0,0,1,4.876,4.876V39.01a4.876,4.876,0,0,1-4.876,4.876H4.876A4.876,4.876,0,0,1,0,39.01V4.876A4.876,4.876,0,0,1,4.876,0Z" transform="translate(48.114 368.114)" fill="url(#linear-gradient-2)"/>
    <path id="Path_220" data-name="Path 220" d="M27.767-219.607c0-.408,0-.746,0-1.084.018-1.668.2-1.8,1.832-1.806,1.061,0,1.542.463,1.383,1.471-.178,1.133.283,1.628,1.341,2A4.611,4.611,0,0,1,35.24-215.7c.211.768-.07,1.283-.885,1.351-1.066.089-2.04.165-2.613-1.183-.612-1.439-3.784-1.7-4.837-.546a1.828,1.828,0,0,0,.565,2.9,7.687,7.687,0,0,0,1.588.449c.957.2,1.934.325,2.88.566,2.409.613,3.761,2.013,3.921,3.977.221,2.7-.816,4.7-3.232,5.617-1.264.481-1.825,1.055-1.663,2.438.127,1.085-.746,1.157-1.568,1.154s-1.73-.038-1.59-1.124c.194-1.505-.474-2.027-1.81-2.429a4.731,4.731,0,0,1-3.138-3.293c-.245-.764-.5-1.524.511-1.931a2.209,2.209,0,0,1,2.7.737c.992,2.066,2.137,2.656,4.367,2.195a2.209,2.209,0,0,0,1.98-2.162c.085-1.285-.662-1.861-1.771-2.109-1.245-.278-2.517-.444-3.746-.777-2.612-.708-3.83-2.159-3.936-4.538a5.1,5.1,0,0,1,3.679-4.849C26.961-219.371,27.288-219.459,27.767-219.607Z" transform="translate(40.411 600.998)" fill="#fcfcfc"/>
  </g>
</svg>



`;

  return (
    <SvgXml xml={figure} width="100%" height="100%"></SvgXml>
  );
}

export default UsdCard;
