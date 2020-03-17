import React from 'react';
import './App.css';
import Layout from './components/Layout'
import Home from './components/pages/Home'

function App() {
  return (
    <Layout component={Home}/>
  );
}

export default App;
