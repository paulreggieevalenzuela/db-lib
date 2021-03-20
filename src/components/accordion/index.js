import React from 'react';
import PropTypes from 'prop-types';

export default function Accordion({ children }) {
  return (
    <section className="accordion">
      {children}
    </section>
  );
}

Accordion.propTypes = {
    children: PropTypes.any,
};

Accordion.defaultProps = {
    children: null,
};