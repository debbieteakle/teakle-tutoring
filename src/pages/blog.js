import React from "react"
import { Helmet } from "react-helmet"
import "../components/global.css"
import Layout from "../components/layout"
import { Link } from "gatsby"


const BlogPage = ({data}) => {
  return (    
        <Layout>
          <Helmet>
              <meta charSet="utf-8" />
              <title>Mathew Teakle Tutoring | Online HSC English Tuition</title>
              <link rel="canonical" href="https://teakle.com.au" />
              <meta name="keywords" content="Find a Tutor, English Tutor, English Teacher, 
              Private Tutor English, Online Teacher English, Private English Teacher, HSC English Tutor, 
              High School English, High School Literacy Tutor, Essays, Creative Writing" />
              <meta name="description" content="Mathew Teakle is a qualified English teacher with 20 years of tutoring experience. 
              He provides private English tuition online to students all over NSW. Pay week by week or by term. Contact Mathew to discuss your English tutoring needs." />
              <meta name="google-site-verification" content="pIfTVRhYnx_exObArZVnORzf_3KokccntYBpdYTqUzo" />
            </Helmet>
          <div>
            <h1>Latest Posts</h1>
            {data.allMarkdownRemark.edges.map(post => (
                <div key = {post.node.id}>
                    <h3>{post.node.frontmatter.title}</h3>
                    <small>Posted by { post.node.frontmatter.author } 
                      on { post.node.frontmatter.date }</small>
                      <br />
                    <Link to={post.node.frontmatter.path}>Read more</Link>
                    <hr />
                </div>
              ))}
          </div>         
        </Layout> 
    );
}

export const pageQuery = graphql `
  query BlogIndexQuery {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                author
                date
                path
                title
              }
            }
          }
        }
  }
`


export default BlogPage
