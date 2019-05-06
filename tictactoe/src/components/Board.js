import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, openModal, closeModal } from './Modal';
import './Board.css';

function mapStateToProps(state) {
    return {
        board: state.game.board,
        playerTurn: state.game.playerTurn
    }
}

function mapDispatchToProps(dispatch) {
    return {
        squareChange: (x, y) => dispatch({ type: 'PLAY', square: { x: x, y: y } }),
        gameOver: (playerWon) => dispatch({ type: 'WIN', win: playerWon})
    }
}

export class Board extends Component {

    playerClicked(x, y, event) {
        this.props.squareChange(x, y);
        this.checkWin.call(this, x, y);
    }

    checkWin(x, y) {
        if(x == y) {
            if(this.props.board[0][0] == this.props.board[1][1] && this.props.board[1][1] == this.props.board[2][2]) {
                    this.gameWon.call(this);
            }
        }
        if((x == 2 && y == 0) || (x == 0 && y == 2) || (x==1 && y==1)) {
            if(this.props.board[2][0] == this.props.board[1][1] && this.props.board[1][1] == this.props.board[0][2]) {
                this.gameWon.call(this);
            }
        }
        if(this.props.board[x][0] == this.props.board[x][1] && this.props.board[x][1] == this.props.board[x][2]) {
            this.gameWon.call(this);
        }
        else if(this.props.board[0][y] == this.props.board[1][y] && this.props.board[1][y] == this.props.board[2][y]) {
            this.gameWon.call(this);
        }
    }

    gameWon() {
        if(this.props.playerTurn){
            document.getElementById('modal').innerHTML = `${this.props.players.player1 || 'X'} WON!!`;
        }
        else {
            document.getElementById('modal').innerHTML = `${this.props.players.player2 || 'O'} WON!!`;
        }
        openModal.call(this);
        this.props.gameOver(this.props.playerTurn);
    }

  render() {
    return (
        <div>
            <div id="board">
                <div class="row">
                    <div onClick={this.playerClicked.bind(this, 0, 0)} class="square col-sm-4"><b>{this.props.board[0][0]}</b></div>
                    <div onClick={this.playerClicked.bind(this, 1, 0)} class="square col-sm-4"><b>{this.props.board[1][0]}</b></div>
                    <div onClick={this.playerClicked.bind(this, 2, 0)} class="square col-sm-4"><b>{this.props.board[2][0]}</b></div>
                </div>
                <div class="row">
                    <div onClick={this.playerClicked.bind(this, 0, 1)} class="square col-sm-4"><b>{this.props.board[0][1]}</b></div>
                    <div onClick={this.playerClicked.bind(this, 1, 1)} class="square col-sm-4"><b>{this.props.board[1][1]}</b></div>
                    <div onClick={this.playerClicked.bind(this, 2, 1)} class="square col-sm-4"><b>{this.props.board[2][1]}</b></div>
                </div>
                <div class="row">
                    <div onClick={this.playerClicked.bind(this, 0, 2)} class="square col-sm-4"><b>{this.props.board[0][2]}</b></div>
                    <div onClick={this.playerClicked.bind(this, 1, 2)} class="square col-sm-4"><b>{this.props.board[1][2]}</b></div>
                    <div onClick={this.playerClicked.bind(this, 2, 2)} class="square col-sm-4"><b>{this.props.board[2][2]}</b></div>
                </div>
            </div>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
