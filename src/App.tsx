import React, { useState } from 'react';
import { LogContext } from './context/context';
import Main from './pages/Main';
import './style/main.css';

const App = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  return (
    <LogContext.Provider value={{
      isLogedIn,
      setIsLogedIn
    }}>
     <Main/>
    </LogContext.Provider>
  );
};

export default App;