import React, { Component } from 'react';

class FirstComponent extends Component {
  render() {
    const skills = ["HTML",'JS','CSS','DOM','GitHub','Git'];
    const jsxSkills = skills.map((skill) => <li>{skill}</li>) 
    return (
    <div>
      <h1><p>Ricardo Lino de Souza, 19 anos, SBC-SP</p></h1>
      <h2>Minhas Habilidades</h2>
      <ol>{jsxSkills}</ol>;
    </div>
    )
  }
}

export default FirstComponent;