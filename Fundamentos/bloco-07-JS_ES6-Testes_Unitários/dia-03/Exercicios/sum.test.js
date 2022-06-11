const { sum, myRemove, myFizzBuzz, decode, encode, techList, hydrate } = require('./sum');

describe('Tests for sum function', () => {
  it('returns params a = (1) + b = (1)', () => {
    expect(sum(1, 1)).toBe(2);
  });

  it('returns zero if both params is 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('returns error if one param is typeOf string', () => {
    expect(() => {sum('5', 2)}).toThrow();
  });

  it('returns error message if one param is typeOf string', () => {
    expect(() => {sum('5', 2)}).toThrow(Error);
  });
});

describe('Test for myRemove function', () => {
  it('checks if returns array [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('checks if it not returns array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('checks if returns array [1, 2, 3, 4] when param is five', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Test for myFizzBuzz function', () => {
  it('checks if return true for "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  it('checks if return true for "fizz"', () => {
    expect(myFizzBuzz(9)).toEqual('fizz');
  });

  it('checks if return true for "buzz"', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
  });

  it('checks if return false for param !number', () => {
    expect(myFizzBuzz('a')).toEqual(false);
  });
});

describe('Test for encode function', () => {
  it('checks if encode is a function', () => {
    expect(typeof encode).toEqual('function');
  });

  it('checks if [a, e, i, o, u] encodes', () => {
    expect(encode('a,e,i,o,u')).toBe('1,2,3,4,5');
  });

  // it('checks if return false for param !number', () => {
  //   expect(myFizzBuzz('a')).toEqual(false);
  // });
});

describe('Test for decode function', () => {
  it('checks if decode is a function', () => {
    expect(typeof decode).toEqual('function');
  });

  it('checks if [1, 2, 3, 4, 5] decodes', () => {
    expect(decode('1,2,3,4,5')).toBe('a,e,i,o,u');
  });

  // it('checks if return false for param !number', () => {
  //   expect(myFizzBuzz('a')).toEqual(false);
  // });
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});