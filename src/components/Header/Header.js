import React, { Component } from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import BackDrop from './BackDrop/BackDrop';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
    };
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => ({
      sideDrawerOpen: !prevState.sideDrawerOpen,
    }));
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    const { sideDrawerOpen } = this.state;
    return (
      <div>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawerOpen && <BackDrop click={this.backDropClickHandler} />}
        <SideDrawer show={sideDrawerOpen} />
      </div>
    );
  }
}
