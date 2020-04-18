require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  );
}

module.exports = {
  siteMetadata: {
    url: 'https://hebrew-adventure.netlify.app',
    title: 'הַרְפַּתְקָה עִבְרִית',
    description: 'קְוְוֵסְטִים בְּעִבְרִית לִילָדִים וְלִמְבֻגָּרִים',
    image: '/static/site_image.jpg',
    titleTemplate: '%s - הַרְפַּתְקָה עִבְרִית',
    siteLanguage: 'he',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-plugin-webpack-bundle-analyzer',
    'gatsby-plugin-emotion',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-portal',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'הַרְפַּתְקָה עִבְרִית',
        lang: `he`,
        icon: `static/favicon.png`,
        background_color: '#0F1719',
        theme_color: '#02EBDF',
        display: `standalone`,
        start_url: `/`,
      },
    },
  ],
};
