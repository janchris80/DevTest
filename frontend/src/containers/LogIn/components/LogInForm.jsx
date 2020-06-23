import React, { Component } from 'react';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import CheckBox from '../../../shared/components/form/CheckBox';
import { login } from './UserFunction';

class LogInForm extends Component {
  constructor() {
    super();
    this.state = {
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      showPassword: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;
    // eslint-disable-next-line react/prop-types
    const { history } = this.props;

    login({ email, password }).then((result) => {
      if (result) {
        history.push('/pages/one');
      }
    });
  }

  showPassword = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  };

  render() {
    const { showPassword, email, password } = this.state;

    return (
      <form noValidate onSubmit={this.onSubmit} className="form">
        <div className="form__form-group">
          <span className="form__form-group-label">Email</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <AccountOutlineIcon />
            </div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Password</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <KeyVariantIcon />
            </div>
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={this.onChange}
            />
            <button
              className={`form__form-group-button ${showPassword ? 'active' : ''}`}
              onClick={e => this.showPassword(e)}
              type="button"
            ><EyeIcon />
            </button>
          </div>
          <div className="account__forgot-password">
            <a href="/">Forgot a password?</a>
          </div>
        </div>
        <div className="form__form-group">
          <div className="form__form-group-field">
            <CheckBox name="remember_me" label="Remember me" value="on" onChange={() => {}} />
          </div>
        </div>
        <button className="btn btn-primary account__btn account__btn--small" type="submit">Sign In</button>
        <Link className="btn btn-outline-primary account__btn account__btn--small" to="/log_in">Create Account</Link>
      </form>
    );
  }
}

export default withRouter(LogInForm);
