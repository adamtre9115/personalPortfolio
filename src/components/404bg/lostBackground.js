import React from 'react';
import Img from 'gatsby-image';

import styles from './lostBackground.module.css';

const lostBackground = props => (
  <div>
    <Img
      className={styles.lostImage}
      title="404 background"
      alt="image of mountains and man"
      sizes={props.lostImg}
    />
  </div>
)

export default lostBackground;