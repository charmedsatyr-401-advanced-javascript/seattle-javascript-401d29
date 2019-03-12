import './footer.css';

import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {
  render() {
    return <footer>{this.props.app.title} &copy; 2018 Code Fellows</footer>;
  }
}

const mapStateToProps = state => ({
  app: state.app,
});

export default connect(mapStateToProps)(Footer);
