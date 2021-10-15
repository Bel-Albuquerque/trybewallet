import React from 'react';
import InputLoggin from '../components/InputLoggin';

class Login extends React.Component {

  handleclick = (email, callback) => {
    const { history } = this.props;
    callback(email);
    history.push('/carteira')
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

export default Login;
