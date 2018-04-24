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

import styles from './portfolio.module.css';

const Portfolio = props => (
  <div>
      <div className={styles.portfolioContent}>
        <div className={styles.portfolioOverlay}></div>
          <img className={styles.portfolioImage} src={props.portImgs} alt={props.portTitles} />
          <div className={styles.portfolioDetails}>
            <div>
              <h4>{props.portTitles}</h4>
              <p>
                <a className={styles.portfolioLink} href={props.portUrl} target='_blank'>
                  View
                </a>
              </p>
            </div> 
          </div>
      </div>
  </div>
)

export default Portfolio;
