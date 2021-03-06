import React from 'react';
import Link from 'gatsby-link';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Row,
} from 'reactstrap';

import styles from './contact.module.css';

const FormContact = () => (
  <div>
    <section id="contact" className={styles.contactAll}>
      <Container>
        <div className={styles.contactCenter}>
          <h2>Get in Touch</h2>
          <p>Want to know a little more? Well, I’d love to hear from you too so, don’t hesitate to get in touch!</p>
        </div>
        <Row>
          <Col md="6">
            <Form name='Contact Form' method='post' data-netlify='true' data-netlify-honeypot="bot-field">
              <Input
                type="hidden"
                name="bot-field"
              />
              <FormGroup>
                <Input
                  className={styles.contactInput}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Input
                  className={styles.contactInput}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Input
                  className={styles.contactInput}
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Input
                  className={styles.contactInput}
                  type="textarea"
                  name="message"
                  name="message"
                  id="message"
                  placeholder="Message"
                />
              </FormGroup>

              <Button type="submit" className={styles.contactSubmit}>Submit</Button>
            </Form>
          </Col>
          <Col md="6" className={`${styles.sendOff} ${styles.contactCenter}`} >
          <img src="https://placeimg.com/250/200/tech" alt="Placeholder"/>
          </Col>
        </Row>
      </Container>
    </section>
  </div>
)

export default FormContact;
