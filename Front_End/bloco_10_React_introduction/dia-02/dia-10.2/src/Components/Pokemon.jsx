import React from 'react';

class Pokemons extends React.Component {
  render() {

    const { id, name, type, averageWeight, image } = this.props.pokemonCard

    const { value, measurementUnit } = averageWeight;

    return (
      <div key={id} className='card'>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>Avarage weight: {value}{measurementUnit}</p>
        </div>

        <div><img src={image} alt={name}></img></div>
      </div>
    )
  };
};

export default Pokemons;
