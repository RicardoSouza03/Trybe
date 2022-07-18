import React from 'react';
import './App.css'
import Header from './Header';
import Content from './Content'
import Footer from './Footer'

/*
const Task = (value) => {
  const compromissos = ['Lava louça', 'comer', 'academia', 'dormir'];
  const ok = compromissos.map((compromisso) => <li>{compromisso}</li>) 
  return (
    <ul>{value}</ul>
    );
} */
  
function App() {
  return (
  <main className='App'>
  <Header />
  <ol><Content /></ol>
  <Footer />
  </main>)
}

export default App;