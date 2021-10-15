import React from 'react';
import PropTypes from 'prop-types';
import InputLoggin from '../components/InputLoggin';

class Login extends React.Component {
  constructor() {
    super();

    this.handleclick = this.handleclick.bind(this);
  }

  handleclick(email, callback) {
    const { history } = this.props;
    callback(email);
    history.push('/carteira');
  }

  render() {
    return (
      <div>
        Login
        <InputLoggin
          handleclick={ this.handleclick }
        />
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
