import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout.js'

export default function Template({data}){
    const post = data.markdownRemark

    return(
      <Layout>
        <div className="pt-8 sm:mx-20 mx-5 content-center">
          <h1 className="text-2xl">{post.frontmatter.title}</h1>
          <p className="text-sm py-4">{post.frontmatter.author} on {post.frontmatter.date}</p>
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