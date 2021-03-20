import React from 'react';
import PropTypes from 'prop-types';

export default function Cta({ label, backgroundColor, onClick }) {
  return (
    <button onClick={onClick}
    style={backgroundColor && { backgroundColor }}>
      {label}
    </button>
  );
}

Cta.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Cta.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};