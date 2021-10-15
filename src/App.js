import React from 'react';
import { Provider } from 'react-redux';
import Routers from './components/Routers';
import store from './store/index.js';

function App() {
  return (
    <Provider store={ store }>
      <div>
        Hello, TrybeWallet!
        <Routers />
      </div>
    </Provider>
  );
}

export default App;
