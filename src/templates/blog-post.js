import React from 'react'
import Layout from '../components/layout.js'
import Img from "gatsby-image"


export default function Template({data}){
    const post = data.markdownRemark
    // {post.frontmatter.featuredImage ? <p>{data.subtitle}</p> : <p>Default subtitle</p>}

   // const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

    return(
      <Layout>
        <div className="pt-8 sm:mx-20 mx-5 content-center">
          <h1 className="text-2xl">{post.frontmatter.title}</h1>
          <p className="text-sm py-4">{post.frontmatter.author} on {post.frontmatter.date}</p>
          <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-md">
              {post.frontmatter.featuredImage && <Img fluid = {post.frontmatter.featuredImage.childImageSharp.fluid} />}
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.html}} />
        </div>
      </Layout>
    )
}

export const postQuery = graphql `
  query BlogPostByPath( $path: String! ){
    markdownRemark(frontmatter: { path: { eq: $path }}){
      html
      frontmatter {
        path
        title 
        author
        date (formatString: "DD MMMM, YYYY")
        featuredImage {
            childImageSharp {
              fluid(maxWidth: 940) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    }
  }
`