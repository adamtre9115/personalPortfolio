import React, { Component } from 'react'
import propTypes from 'prop-types'
import Img from 'gatsby-image'
import { Container, Row } from 'reactstrap'
import {
  FacebookShareButton,
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  EmailIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'react-share'

import styles from './blog-post.module.css'

class BlogPost extends Component {
  render() {
    // if window is not undefined shareUrl = the page URL
    if (typeof window !== 'undefined') {
      this.shareUrl = window.location.href
    }

    const {
      title,
      createdAt,
      featuredImage,
      content,
    } = this.props.data.contentfulBlog

    {
      /* get current page location*/
    }

    const Title = { title }
    return (
      <div>
        <div className={styles.allBlog}>
          <Container>
            <h1 className={`${styles.blogHeading} ${styles.blogCenter}`}>
              {title}
            </h1>
            <p className={styles.blogCenter}>Posted {createdAt}</p>
            <div>
              {featuredImage ? (
                <div className={styles.blogCenter}>
                  <img src={featuredImage.sizes.src} />
                </div>
              ) : null}
            </div>
            <hr />
            <div
              dangerouslySetInnerHTML={{
                __html: content.childMarkdownRemark.html,
              }}
            />
            <hr />
            <p>Like what you've just read? Please do share!</p>
            <FacebookShareButton
              className={styles.blogIcon}
              url={this.shareUrl}
              quote={title}
            >
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>

            <TwitterShareButton
              className={styles.blogIcon}
              url={this.shareUrl}
              title={title}
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>

            <LinkedinShareButton
              className={styles.blogIcon}
              url={this.shareUrl}
              description={title}
            >
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>

            <EmailShareButton
              className={styles.blogIcon}
              url={this.shareUrl}
              subject={title}
              body={`Check out ${title}`}
            >
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
          </Container>
        </div>
        <div>
          <Container />
        </div>
      </div>
    )
  }
}

BlogPost.propTypes = {
  data: propTypes.object.isRequired,
}

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      createdAt(formatString: "MMMM DD, YYYY")
      featuredImage {
        sizes(maxWidth: 800, maxHeight: 400) {
          src
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
export default BlogPost
