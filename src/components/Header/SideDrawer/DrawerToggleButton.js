import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Menu } from '../../../assets/menu icon.svg';

const DrawerToggleButton = ({ click }) => (
  <button type="button" onClick={click} className="toggle-button">
    <Menu />
  </button>
);

export default DrawerToggleButton;

DrawerToggleButton.propTypes = {
  click: PropTypes.func.isRequired,
};
