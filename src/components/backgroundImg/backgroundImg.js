import React from 'react';
import Img from 'gatsby-image';

import styles from './backgroundImg.module.css';

const BackgroundImg = props => (
  <div id="home">
    <Img
      className={styles.headingImage}
      title="Header background"
      alt="image of mountains"
      sizes={props.headingImage}
    />
  </div>
)

export default BackgroundImg;
