import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Roboto Mono', 'monospace'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  googleFonts: [
    {
      name: 'Roboto Mono',
      styles: ['400', '700'],
    },
    {
      name: 'Roboto',
      styles: ['400', '700'],
    },
  ],
});

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;
