import React, { Component } from 'react';
import propTypes from 'prop-types';
import Img from 'gatsby-image';
import { Container, Row } from 'reactstrap';
import { DiscussionEmbed } from "disqus-react";
import {
  FacebookShareButton,
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  EmailIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'react-share';

import styles from './blog-post.module.css';

class BlogPost extends Component {
  render() {
    // if window is not undefined shareUrl = the page URL
    if (typeof window !== 'undefined') {
      this.shareUrl = window.location.href
    }
    
    const {
      id,
      title,
      createdAt,
      featuredImage,
      content,
    } = this.props.data.contentfulBlog

    const Title = { title }
  
    const disqusShortname = 'my-portfolio-9';
    const disqusConfig = {
      url: this.shareUrl,
      identifier: {id},
      title: Title
    };
console.log(this.props)
    return (
      <div>
        <div className={styles.allBlog}>
          <Container>
            <h1 className={`${styles.blogHeading} ${styles.blogCenter}`}>
              {title}
            </h1>
            <p className={styles.blogCenter}>Posted: {createdAt}</p>
            <div>
              {featuredImage ? (
                <div className={styles.blogCenter}>
                  <img src={featuredImage.sizes.src} />
                </div>
              ) : null}
            </div>
            <hr />
            <div id="blog-post"
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
        <div id="comment-container">
          <Container>
            <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
          </Container>
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
      id
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
