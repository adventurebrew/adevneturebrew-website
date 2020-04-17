import { css } from '@emotion/core';
import theme from '../../theme.js';
import strangerFont from '../../../static/fonts/stranger.woff2';

const { colors, fonts } = theme;
const globalStyle = css`
  @import url('https://fonts.googleapis.com/css?family=Nunito:400');
  @font-face {
    font-family: 'stranger';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${strangerFont}) format('woff2');
  }
  html {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    font-size: 62.5%;
    ${'' /* 62.5% = 10px */}
    @media only screen and (max-width: 600px) {
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
`;
export default globalStyle;
