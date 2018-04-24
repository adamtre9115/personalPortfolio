import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col } from 'reactstrap'

const blogHome = ({ data }) => (
  <div>
    <section id="blogView">
      <Container>
        <h1 className="text-center blog-heading">Welcome to The Coding Motif</h1>
        <Row>
          {data.allContentfulBlog.edges.map(blog => (
          <Col key={blog.node.id} md='4'>
            {blog.node.featuredImage ? (
              <img
                src={blog.node.featuredImage.resolutions.src}
                alt="Blog Featured Image"
              />
            ) : null}
            <h2>{blog.node.title}</h2>
            <small>Posted: {blog.node.createdAt}</small>
            <div>
              <p>{blog.node.content.childMarkdownRemark.excerpt}</p>
            </div>
            <Link to={blog.node.slug}>Read more</Link>
            <hr />
          </Col>
        ))}
        </Row>
      </Container>
    </section>
  </div>
)

// query for all blogs and sort newest to oldest
export const blogQuery = graphql`
  query getBlogQuery {
    allContentfulBlog(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          id
          title
          slug
          createdAt(formatString: "MMMM DD, YYYY")
          featuredImage {
            resolutions(width: 300) {
              width
              src
            }
          }
          content {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`
export default blogHome
