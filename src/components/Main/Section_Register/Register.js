/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position_id: 1,
      name: '',
      nameError: '',
      email: '',
      emailError: '',
      phone: '',
      phoneError: '',
      photo: null,
      photoError: '',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOptionChange = e => {
    this.setState({ position_id: Number(e.target.value) });
  };

  handlePhotoChange = e => {
    this.setState({ photo: e.target.files[0] });
  };

  validate = () => {
    let isError = false;
    const { name, email, phone, photo } = this.state;

    const errors = {
      nameError: '',
      emailError: '',
      phoneError: '',
      photoError: '',
    };

    if (name.length < 6) {
      isError = true;
      errors.nameError = 'Username needs to be atleast 6 characters long';
    }

    if (email.indexOf('@') === -1) {
      isError = true;
      errors.emailError = 'Requires valid email';
    }

    if (phone.length !== 13) {
      isError = true;
      errors.phoneError = 'Number must consists of 13 digits';
    }

    if (phone.slice(0, 4) !== '+380') {
      isError = true;
      errors.phoneError = 'Number must start with +380';
    }

    if (photo === null) {
      isError = true;
      errors.photoError = 'Needs photo';
    } else if (photo.type !== 'image/jpeg') {
      isError = true;
      errors.photoError = 'Photo needs to be in jpeg format';
    } else if (photo.size > 5242880) {
      isError = true;
      errors.phoneError = 'Photo should be less than 5 mb';
    }

    this.setState(prevState => ({
      ...prevState,
      ...errors,
    }));

    return isError;
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, position_id, email, phone, photo } = this.state;
    const { onRegister } = this.props;
    const data = {
      name,
      position_id,
      email,
      phone,
      photo,
    };

    const err = this.validate();

    if (!err) {
      onRegister(data);

      this.setState({
        position_id: 1,
        name: '',
        nameError: '',
        email: '',
        emailError: '',
        phone: '',
        phoneError: '',
        photo: null,
        photoError: '',
      });
    }
  };

  render() {
    const {
      name,
      position_id,
      email,
      phone,
      photo,
      nameError,
      emailError,
      phoneError,
      photoError,
    } = this.state;
    const { positions, fetchTokenError, fetchPositionsError } = this.props;
    return (
      <section className="Register-section">
        <div className="Register-section__header">
          <h1>Register to get a work</h1>
          <p>
            Attention! After successful registration and alert, update the list
            of users in the block from the top
          </p>
        </div>
        <form onSubmit={this.handleSubmit} className="Register-section__form">
          <div className="Register-section__form-main">
            <div className="Register-section__form-main-element">
              <label className="Register-section__form-main-label">Name</label>

              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                className="Register-section__form-main-input"
                placeholder="Your name"
              />
              <div className="Register-section__after-input">
                Enter your name
              </div>
              {nameError && <div className="error-message">{nameError}</div>}
            </div>
            <div className="Register-section__form-main-element">
              <label className="Register-section__form-main-label">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                className="Register-section__form-main-input"
                placeholder="Your email"
              />
              <div className="Register-section__after-input">
                Enter your email
              </div>
              {emailError && <div className="error-message">{emailError}</div>}
            </div>
            <div className="Register-section__form-main-element">
              <label className="Register-section__form-main-label">
                Phone number
              </label>
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={this.handleChange}
                className="Register-section__form-main-input"
                placeholder="+380"
              />
              <div className="Register-section__after-input">
                Enter your phone number in open format
              </div>
              {phoneError && <div className="error-message">{phoneError}</div>}
            </div>
          </div>
          <div className="Register-section__select">
            <label className="Register-section__select-header">
              Select your position
            </label>
            <div>
              {fetchPositionsError && (
                <div>{fetchPositionsError} + Positions were not found</div>
              )}
              {positions.map(position => (
                <div
                  className="Register-section__select-position"
                  key={position.id}
                >
                  <label>
                    <input
                      type="radio"
                      name={position.id}
                      value={position.id}
                      checked={position.id === position_id}
                      onChange={this.handleOptionChange}
                    />
                    <span>{position.name}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="Register-section__photo-container">
            <label className="Register-section__photo-label">Photo</label>
            <div className="Register-section__photo-input">
              <label htmlFor="file-upload" className="custom-file-upload">
                {photo ? photo.name : <span>Upload your photo</span>}
              </label>

              <label htmlFor="file-upload" className="custom-file-browse">
                Browse
              </label>

              <input
                type="file"
                name="photo"
                id="file-upload"
                onChange={this.handlePhotoChange}
                className="Register-section__photo-input"
              />
            </div>
            {photoError && <div className="error-message">{photoError}</div>}
          </div>
          <button type="submit" className="button">
            Sing up now
          </button>
          {fetchTokenError && <div>{fetchTokenError} + TokenError</div>}
        </form>
      </section>
    );
  }
}

Register.defaultProps = {
  fetchTokenError: '',
  fetchPositionsError: '',
};

Register.propTypes = {
  onRegister: PropTypes.func.isRequired,
  positions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  fetchTokenError: PropTypes.string,
  fetchPositionsError: PropTypes.string,
};
