import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Form />
    </div>
  );
}

export default App;
