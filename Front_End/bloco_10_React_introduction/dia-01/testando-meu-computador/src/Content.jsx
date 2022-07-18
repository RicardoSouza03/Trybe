import React from 'react';
import './App.css'

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      conteudos.map(({ conteudo, status, bloco }) => {
        return <div key={bloco} className='card'>
          <p>O contéudo é: {conteudo}</p>
          <p>Status: {status}</p>
          <p>Bloco: {bloco}</p>
        </div>
      }
      )
    )
  }
}

export default Content;