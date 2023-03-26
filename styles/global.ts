import { Roboto } from '@next/font/google';
import { globalCss, styled } from '.';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased',
    scrollBehavior: 'smooth',
  },
  body: { backgroundColor: 'WhiteSmoke', color: '$text' },
  'h1, h2, h3, h4, h5, h6': {
    color: '$title',
  },
});
