import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <h1>Blog Page</h1>
            <ol>
                {data.allMarkdownRemark.edges.map( (articulo)=>{
                    return (<li>
                        <h2>{articulo.node.frontmatter.title}</h2>
                        <p>{articulo.node.frontmatter.date}</p>
                    </li>)
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage