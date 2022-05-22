import React from 'react';
import { Button } from './components/Button';
import { MetamaskLogo } from './assets/icons';
function App () {
  return (
    <div className="App">
      <Button size="lg" variant="outlined">
        {/* <img src={MetamaskLogo} /> */}
        Connect Wallet
      </Button>
    </div>
  );
}

export default App;
