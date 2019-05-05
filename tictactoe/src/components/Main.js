import React, { Component } from 'react';
import Board from './Board';
import Scores from './Scores';
import { Modal, openModal, closeModal } from './Modal';

export class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player1: '',
      player2: ''
    }
  }

  componentDidMount() {
    openModal.call(this);
  }

  startGame() {
    closeModal.call(this);
    this.setState(() => {
      return {
        player1: document.getElementsByName('player1')[0].value,
        player2: document.getElementsByName('player2')[0].value
      }
    })
  }

  render() {
    return (
      <div>
        <Scores players={this.state} />
        <Board players={this.state} />
        <Modal>
          <form>
            <div>
              <label>Player 1: </label>
              <input name='player1' type='text' />
            </div>
            <div>
              <label>Player 2: </label>
              <input name='player2' type='text' />
            </div>
            <input type='button' value='START' onClick={this.startGame.bind(this)} />
          </form>
        </Modal>
      </div>
    );
  }
}

export default Main;