const CircularXX = require('./CircularXXWeb-Regular.woff2');
// why not use the font stored on the cloud?
export function getCircularXXFontFace() {
  return `
    @font-face {
      font-family: 'CircularXX';
      font-style: normal;
      font-display: swap;
      font-weight: 500;
      src: local('CircularXX'), url(${CircularXX}) format('woff2');
    }
  `;
}
