let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
  bestInTheWorld: { dates: [2006, 2007, 2008, 2009, 2010, 2018] },
};

console.log(
  `A jogadora ${[player["name"] + " " + player["lastName"]]} tem ${
    player["age"]
  } anos de idade`
);

let quantidade = player.bestInTheWorld.dates.length;

console.log(
  `A jogadora ${[
    player["name"] + " " + player["lastName"],
  ]} foi eleita a melhor do mundo por ${quantidade} vezes`
);

console.log(
  `A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata`
);
