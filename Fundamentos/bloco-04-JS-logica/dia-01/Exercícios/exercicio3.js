const valor1 = 1122 //retorna esta
const valor2 = 120
const valor3 = 422

if(valor1 > valor2 && valor1 > valor3){
  console.log('valor 1 é o maior valor')
}else if(valor2 > valor1 && valor2 > valor3){
  console.log('valor 2 é o maior valor');
}else if(valor3 > valor1 && valor3 > valor2){
  console.log('valor 3 é o maior valor');
}else{
  console.log('erro');
}