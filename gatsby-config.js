require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: "Tresean Adam's Portfolio",
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      },  
    },
    {
      resolve:  'gatsby-plugin-typography',
      options: {
        pathToConfigureModule: 'src/utils/typography.js',
      }
    },

    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
}
