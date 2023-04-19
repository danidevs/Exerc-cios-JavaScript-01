
const peso = 45;
const altura = 1.48;
const imc = peso / (altura * altura);

if ( imc < 18.5){
    console.log ('baixo');
}else if ( imc >= 25 && imc < 30){
    console.log ('normal');
}else{
    console.log ('acima do peso');
}
