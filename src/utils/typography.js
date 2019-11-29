import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Oxygen', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  googleFonts: [
    {
      name: 'Oxygen',
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
