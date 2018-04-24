import React from 'react';
import { Container } from 'reactstrap'
import styles from './quote.module.css';

const Quote = props => (
    <div>
        <section className={styles.quote}>
            <Container>
                <blockquote className='blockquote'>
                    {props.theQuote}
                    <footer>~{props.theAuthor}</footer>
                </blockquote>
            </Container>
        </section>
    </div>
)

export default Quote;