import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as blogStyles from './blog.module.scss'

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
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <h1>Blog Page</h1>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map( (articulo)=>{
                    return (<li className={blogStyles.post}>
                        <Link to={`/blog/${articulo.node.fields.slug}`}>
                            <h2>{articulo.node.frontmatter.title}</h2>
                            <p>{articulo.node.frontmatter.date}</p>
                        </Link>
                    </li>)
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage