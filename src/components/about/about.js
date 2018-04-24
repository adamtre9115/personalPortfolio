import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'reactstrap';

import styles from './about.module.css';

const About = props => (
  <div>
    <section id="about" className={styles.about}>
      <Container>
        <h2 className={`${styles.aboutText} ${styles.aboutCenter}`}>About</h2>
        <Row>
          <Col md='6' className={styles.aboutCenter}>
              <Img sizes={props.myImage} />
          </Col>
          <Col md="6"
            className={styles.aboutText}
            dangerouslySetInnerHTML={{ __html: props.aboutPg }}
          />
        </Row>
      </Container>
    </section>
  </div>
)

export default About
