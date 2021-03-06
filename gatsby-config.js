/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Mathew Teakle Sydney HSC English Tutor`,
    siteUrl: `https://www.teakle.com.au`,
    description: `Online High School HSC English tutoring, Sydney`,
  },

  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-63831923-1",
        anonymize: true,
        head: true,
        respectDNT: true,
        pageTransitionDelay: 0,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-postcss`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
      	name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
        {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/content/blog-posts`,
      },
    },
        {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `testimonial`,
        path: `${__dirname}/src/content/testimonials`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mathew Teakle Tutoring`,
        short_name: `Teakle`,
        start_url: `/`,
        background_color: `#eee`,
        theme_color: `#293946`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /images/ 
      },
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Oswald`,
    //         variants: [`500`, `700`]
    //       },
    //       {
    //         family: `Open Sans`,
    //         variants: [`400`, `700`]
    //       },
    //     ],
    //   },
    // }
  ],
}


