import React from 'react'
import { Container, Button } from 'reactstrap'

import styles from './heading.module.css'

const Heading = props => (
  <div>
    <header>
      <div className={styles.headingText}>
        <Container>
          <h1>Hi, I'm Tresean Adam. Full-Stack Developer</h1>
          <a className={styles.headingButton} href="#about">
            Learn More
          </a>
        </Container>
      </div>
    </header>
  </div>
)

export default Heading;
