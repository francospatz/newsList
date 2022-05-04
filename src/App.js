import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header'
import { useState } from 'react';
import { dataContext } from './context/dataContext';
import './styles/styles.scss'



function App() {

  const [user, setUser] = useState("");

  const login = (user) => {
    setUser(user);
  }
  
  const logout = () => {
    setUser("");
  }

  const data = {
    user,
    login,
    logout
  }

  return (
    <div className="App">
      <dataContext.Provider value={data}>
      <BrowserRouter>
          <Header/>
          <Main/>
      </BrowserRouter>
      </dataContext.Provider>
      
    </div>
  );
}

export default App;
