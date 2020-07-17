import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout.js'

export default function Template({data}){
    const post = data.markdownRemark

    return(
      <Layout>
        <div className="pt-8 sm:mx-20 mx-5 content-center">
          <Link to="/blog">Go Back</Link>
          <hr />
          <h1 className="text-4xl">{post.frontmatter.title}</h1>
          <h4 className="text-sm py-4">{post.frontmatter.author} on {post.frontmatter.date}</h4>
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
        date
      }
    }
  }
`