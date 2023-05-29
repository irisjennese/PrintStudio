import React from 'react';
import { Container } from 'reactstrap';
import '../../styles/common-sections.css';

const CommonSection = ({ title }) => {
  return (
    <section className='common_section'>
      <Container>
        <h1>{title}</h1>
      </Container>
    </section>
  );
};

export default CommonSection;
