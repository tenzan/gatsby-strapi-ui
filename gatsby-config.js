/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://gatsby-strapi-api.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`customers`, `locations`, `products`],
        // singleTypes: [`about`],
      },
    },
  ],
};
