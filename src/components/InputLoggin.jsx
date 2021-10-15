import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectUserAction } from '../actions';

class InputLoggin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      buttonDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.emailPasswordIsValid = this.emailPasswordIsValid.bind(this);
    this.validaEmail = this.validaEmail.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.emailPasswordIsValid());
  }

  emailPasswordIsValid() {
    const { password } = this.state;
    if (this.validaEmail() && password.length >= 6) {
      this.setState({ buttonDisabled: false });
    } else {
      this.setState({ buttonDisabled: true });
    }
  }

  validaEmail() {
    const { email } = this.state;
    const emailSplit = email.split('');
    if (email.includes('@')
    && emailSplit[emailSplit.length - 1] !== '@'
    && emailSplit[emailSplit.length - 1] !== '.') {
      return true;
    }
    return false;
  }

  render() {
    const { email, password, buttonDisabled } = this.state;
    const { handleclick, sendEmailToGlobalState } = this.props;

    return (
      <form>
        <input
          data-testid="email-input"
          type="text"
          name="email"
          id="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          type="text"
          name="password"
          id="password"
          value={ password }
          onChange={ this.handleChange }
        />

        <button
          type="button"
          disabled={ buttonDisabled }
          onClick={ () => handleclick(email, sendEmailToGlobalState) }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendEmailToGlobalState: (email) => dispatch(selectUserAction(email)),
});

InputLoggin.propTypes = {
  sendEmailToGlobalState: PropTypes.func.isRequired,
  handleclick: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(InputLoggin);
