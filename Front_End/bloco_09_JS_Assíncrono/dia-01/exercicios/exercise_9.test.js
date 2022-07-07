const { getPokemonDetails } = require('./exercise_8');

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    getPokemonDetails('Ricardo', (error, message) => {
      const expectedError = new Error('Não temos esse pokémon para você :(');
      expect(error).toEqual(expectedError);
      done();
    })
  });

  it("retorna Charmander que existe no banco de dados", () => {
    getPokemonDetails('Charmander', (error, message) => {
      const expectedMessage = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
      expect(message).toEqual(expectedMessage);
      done();
    })
  });

  it("retorna Bulbasaur que existe no banco de dados", () => {
    getPokemonDetails('Bulbasaur', (error, message) => {
      const expectedMessage = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';
      expect(message).toEqual(expectedMessage);
      done();
    })
  });

  it("retorna Squirtle que existe no banco de dados", () => {
    getPokemonDetails('Squirtle', (error, message) => {
      const expectedMessage = 'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun';
      expect(message).toEqual(expectedMessage);
      done();
    })
  });
});
