import { css } from '@emotion/core';
import theme from '../../theme.js';
import strangerFont from '../../../static/fonts/stranger.woff2';
import openSansHebrew from '../../../static/fonts/OpenSansHebrewRegular.woff2';

const { colors, fonts, breakpoints } = theme;
const globalStyle = css`
  @import url('https://fonts.googleapis.com/css?family=Nunito:400');
  @font-face {
    font-family: 'stranger';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${strangerFont}) format('woff2');
  }
  @font-face {
    font-family: 'Open Sans Hebrew';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${openSansHebrew}) format('woff2');
  }
  html {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    font-size: 62.5%;
    ${'' /* 62.5% = 10px */}
    @media only screen and (max-width: ${breakpoints[1]}) {
      font-size: 50%;
    }
  }
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: ${fonts};
  }
  body {
    color: ${colors.brightTurquoise};
    background-color: ${colors.blue[2]};
    padding: 0;
    margin: 0;
    direction: rtl;
    font-size: 1.5rem;
    line-height: 2;
  }
  h1,
  h2 {
    margin: 0;
  }
  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: ${colors.brightTurquoise} ${colors.aztec};
  }
  body::-webkit-scrollbar-track {
    background: transparent
  }
  body::-webkit-scrollbar-thumb {
    background-color: ${colors.brightTurquoise} ;
    border-radius: 6px;
    border: 3px solid ${colors.aztec}
  }
`;
export default globalStyle;
