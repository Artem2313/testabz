import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  backdropRef = createRef();

  constructor(props) {
    super(props);

    const { title, body, button } = props.message;

    this.state = {
      title,
      body,
      button,
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleBackdropClick = e => {
    const { current } = this.backdropRef;
    if (current && e.target !== current) {
      return;
    }
    const { onHandleModal } = this.props;
    onHandleModal();
  };

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    const { onHandleModal } = this.props;
    onHandleModal();
  };

  render() {
    const { onHandleModal } = this.props;
    const { title, body, button } = this.state;
    return (
      <div
        className="backdrop backdrop__modal"
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className="modal">
          <div className="modal__inner">
            <h2 className="modal__title">{title}</h2>
            <div className="spacer" />
            <button
              type="button"
              className="button modal__x"
              onClick={() => onHandleModal()}
            >
              x
            </button>
          </div>
          <div className="modal__inner">
            <p className="modal__body">{body}</p>
          </div>
          <div className="modal__inner">
            <button
              type="button"
              className="button modal__button"
              onClick={() => onHandleModal()}
            >
              {button}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onHandleModal: PropTypes.func.isRequired,
  message: PropTypes.shape({
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }).isRequired,
};
