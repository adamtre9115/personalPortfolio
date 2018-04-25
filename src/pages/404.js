import React from 'react'
import Link from 'gatsby-link'
import Lost from '../components/404bg/lostBackground'
import { Container } from 'reactstrap'

const NotFoundPage = ({ data }) => (
  <div id="lost">
    <Lost lostImg={data.lostImg.sizes} />
    <section id="lost-container">
      <Container>
        <h1>404! It looks Like you're all alone!</h1>
        <p>How Sad... Let me guide you back <Link to="/">Home</Link> </p>

        
      </Container>
    </section>
  </div>
)

export const lostQuery = graphql`
  query getLostImageQuery {
    # query for images
    lostImg: imageSharp(id: { regex: "/lost/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`
export default NotFoundPage
