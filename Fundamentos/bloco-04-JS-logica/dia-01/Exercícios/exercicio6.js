let peca = 'BISPO'.toLowerCase();

let peao = 'peão'
let bispo = 'bispo'

if(peca == bispo){
  console.log('Movimenta-se em diagonal, não podendo pular peças intervenientes.')
} else if(peca == peao){
  console.log('O peão move-se verticalmente na coluna que encontra-se, sendo incapaz de recuar.');
} else {
  console.log('essa peça não existe ou esta escrita de forma errada.')
}