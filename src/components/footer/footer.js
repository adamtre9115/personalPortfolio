import React from 'react'
import { LinkedinIcon, TwitterIcon, GithubIcon } from 'react-share'

import styles from './footer.module.css'

const Footer = () => (
  <div>
    <footer className={styles.footer}>
      <p>Made with &hearts; by Tresean Adam</p>
        <div className={styles.footerIconContainer}>
          <span className={styles.footerIcon}>
            <a href="https://twitter.com/ThisIsTre3" target='_blank'>
              <TwitterIcon size={32} round={true} />
            </a>
          </span>
          <span className={styles.footerIcon}>
            <a href="https://www.linkedin.com/in/tresean-adam/" target='_blank'>
              <LinkedinIcon size={32} round={true} />
            </a>
          </span>
        </div>
    </footer>
  </div>
)

export default Footer
