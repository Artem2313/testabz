import React from 'react';
import PropTypes from 'prop-types';

const BackDrop = ({ click }) => <div className="backdrop" onClick={click} />;

export default BackDrop;

BackDrop.propTypes = {
  click: PropTypes.func.isRequired,
};
