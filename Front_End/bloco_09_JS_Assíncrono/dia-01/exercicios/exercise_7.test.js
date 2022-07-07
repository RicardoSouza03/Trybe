const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('Testando a função uppercase', () => {

  it('Espera que transforme uma string inteira para uppercase', (done) => {
    uppercase('ricardo', (string) => {
      try {
        expect(string).toEqual('RICARDO')
        done()
      } catch (error) {
        done(error);
      }
    })
  })
})