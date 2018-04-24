import Typography from 'gatsby-plugin-typography';

const typography = new Typography({
    baseFontSize: '18px',
    headerFontFamily: ['Raleway', 'san-serif'],
    bodyFontFamily: ['Roboto', 'serif'],
    googleFonts: [
        {
          name: 'Raleway',
          styles: [
            '700',
          ],
        },
        {
          name: 'Roboto',
          styles: [
            '400',
            '400i',
            '700',
            '700i',
          ],
        },
      ],
})

export default Typography;