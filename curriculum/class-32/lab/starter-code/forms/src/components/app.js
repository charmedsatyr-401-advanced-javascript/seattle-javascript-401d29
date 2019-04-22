import React from 'react';
import { connect } from 'react-redux';

import Player from './player.js';

import * as actions from '../store/players-actions.js';

class App extends React.Component {

  deletePlayer = (id) => {
    this.props.handleDelete(id);
  }

  render() {
    return (
      <div>
        <h2>Players</h2>
        <ul>
          {this.props.players.map( (player,idx) => 
            <li key={idx}>
              {player.name}
              <button onClick={() => this.deletePlayer(idx)}>Delete</button>
            </li>
           )}
        </ul>
        <Player />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players,
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleDelete: (id) => dispatch(actions.destroy(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
