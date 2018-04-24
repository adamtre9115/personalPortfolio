import React, { Component } from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import Heading from '../components/heading/heading';
import About from '../components/about/about';
import Portfolio from '../components/portfolio/portfolio';
import Contact from '../components/contact/contact';
import Quote from '../components/quote/quote';
import { Container, Row, Col } from 'reactstrap';
import BackgroundImg from '../components/backgroundImg/backgroundImg';

class IndexPage extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <BackgroundImg headingImage={data.headerImage.sizes} />
        <Heading />
        {/* map through contentful data and pass it out */}
        {data.allContentfulMainContent.edges.map(content => (
          <div key={content.node.id}>
            <About aboutPg={content.node.aboutme.childMarkdownRemark.html} myImage={data.myImage.sizes}/>
          </div>
        ))}
        <Quote
          theQuote={
            '"A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away."'
          }
          theAuthor={
            'Antoine de Saint-Exuper'
          }
        />
        {/*begin portfolio section */}
        <section id="portfolio" className="text-center">
          <h2>Portfolio</h2>
          <Container>
            <Row>
              {data.allContentfulPortfolio.edges.map(content => (
                <Col key={content.node.id} md='6' lg='4'>
                  <Portfolio
                    portTitles={content.node.projectTitle}
                    portImgs={content.node.portfolioImage[0].resolutions.src}
                    portUrl={
                      content.node.projectUrl
                    }
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        <Quote
          theQuote={
            '“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.”'
          }
          theAuthor={
            'Steve Jobs'
          }
        />
        {/*begin contact section */}
        <Contact />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query getHeaderImageAndContentQuery {
    allContentfulMainContent {
      edges {
        node {
          id
          aboutme {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    # query for images
    headerImage: imageSharp(id: { regex: "/mountains/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    # query for images
    myImage: imageSharp(id: { regex: "/Tresean/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    allContentfulPortfolio {
      edges {
        node {
          id
          projectTitle
          portfolioImage {
            resolutions(width: 350) {
              src
            }
          }
          projectUrl
        }
      }
    }
  }
`
export default IndexPage;
