import React from 'react';
import { connect } from 'react-redux';

import * as actions from './store/actions.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(e) {
    e.preventDefault();
    this.props.get();
  }

  render() {
    return (
      <div>
        <a href="#" onClick={this.fetchData}>
          Get The Data
        </a>
        <ul>
          {this.props.api.results.map((result, i) => (
            <li key={i}>{result.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  api: state.api,
});

const mapDispatchToProps = (dispatch, getState) => ({
  get: () => dispatch(actions.getStuff()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
