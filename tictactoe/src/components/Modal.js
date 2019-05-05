import React, { Component } from 'react';
import './Modal.css';

export class Modal extends Component {

    closeModal() {
        document.getElementById('modal').hidden = true;
    }

    openModal() {
      document.getElementById('modal').hidden = false;
    }

  render() {
    return (
      <div id='modal' hidden={true}>
        {/* close modal button */}
        { this.props.hideCloseButton ? <b></b> : <b onClick={this.closeModal.bind(this)}>X</b> }
        
        {/* modal body */}
        <div id='modal-body'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export const openModal = Modal.prototype.openModal;

export const closeModal = Modal.prototype.closeModal;