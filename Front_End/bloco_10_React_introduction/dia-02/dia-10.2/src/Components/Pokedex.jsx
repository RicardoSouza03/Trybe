import React from 'react';
import PokemonCard from './Pokemon'

class Pokedex extends React.Component {
  render() {
    const data = this.props.data
    return (
      <main className='Pokedex'>
        {data.map((item) => (
          <PokemonCard key={item.id} pokemonCard={item} />
        )
        )}
      </main>
    )
  }
};

export default Pokedex;