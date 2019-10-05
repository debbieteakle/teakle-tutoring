/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Mathew Teakle Sydney English Tutor`,
    siteUrl: `https://www.teakle.com.au`,
    description: `HSC online tutoring`,
  },

  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
      	name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}


