let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

let infoPatinhas = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
};

console.log(`Bem-vinda, ${info["personagem"]}!`);

console.log("-----------------------------------------");

info.recorrente = "Sim"; //adicionando a chave recorrente em 'info'
infoPatinhas.recorrente = "Sim";

console.log(info);

console.log("-----------------------------------------");

for (key in info) {
  console.log(key);
}

console.log("-----------------------------------------");

for (key in info) {
  console.log(info[key]);
}

console.log("-----------------------------------------");

for (key in info && infoPatinhas) {
  console.log(info[key] + " e " + infoPatinhas[key]);
}

console.log("-----------------------------------------");

let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};
console.log(leitor);

let livrosFavoritosArray = leitor.livrosFavoritos[0];

console.log(
  `O livro favorito de ${leitor["nome"] + " " + leitor["sobrenome"]} se chama ${
    livrosFavoritosArray["titulo"]
  }`
);

console.log("-----------------------------------------");

leitor.livrosFavoritos[1] = {
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "JK Rowling",
  editora: "Rocco",
};

console.log(leitor);

console.log("-----------------------------------------");

console.log(`Julia tem ${leitor.livrosFavoritos.length} livros favoritos`);
