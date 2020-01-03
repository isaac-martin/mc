import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Playfair Display',
      styles: ['300', '400', '500', '600', '700'],
    },
  ],
  headerFontFamily: ['Playfair Display'],
  bodyFontFamily: ['Georgia', 'serif'],
})

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
