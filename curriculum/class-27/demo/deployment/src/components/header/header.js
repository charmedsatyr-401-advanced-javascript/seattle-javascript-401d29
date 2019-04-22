import './header.css';

import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>{this.props.app.title}</h1>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app,
});

export default connect(mapStateToProps)(Header);
