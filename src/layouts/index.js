import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navigation from '../components/navigation/navigation';
import Footer from '../components/footer/footer';
import {Typography, GoogleFont} from 'gatsby-plugin-typography';

// import Header from '../components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}


const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Web development portfolio of Tresean Adam' },
        { name: 'keywords', content: 'portfolio, web developer, web development' },
      ]}
    />
    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
    <Navigation/>
    
      {children()}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
