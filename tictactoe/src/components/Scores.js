import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    scores: {
      true: state.scores.true,
      false: state.scores.false,
      
    },
    playerTurn: state.game.playerTurn
  }
}

function mapDispatchToProps(dispatch) {
  return {
      
  }
}

export class Scores extends Component {

  componentDidUpdate() {
    if(this.props.playerTurn) {
      document.getElementById('x').style.border = '2px solid red';
      document.getElementById('o').style.border = '';
    }
    else {
      document.getElementById('o').style.border = '2px solid red';
      document.getElementById('x').style.border = '';
    }
  }

  componentDidMount() {
    document.getElementById('x').style.border = '2px solid red';
  }

  render() {
    return (
      <div class="row">
        <div id='x' class='col-sm-6'>
            <h1>{this.props.players.player1 || 'X'}</h1>
            <h4>{this.props.scores.true}</h4>
        </div>
        <div id='o' class='col-sm-6'>
            <h1>{this.props.players.player2 || 'O'}</h1>
            <h4>{this.props.scores.false}</h4>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scores);
