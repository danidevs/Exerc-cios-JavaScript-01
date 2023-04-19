
const a = 80;
const b = 35;
const c = 75;
const media = (a + b + c) / 3;

console.log (media);

if ( media < 50){
    console.log ('reprovado');
}else if ( media <= 70 && media >= 50){
    console.log ('recuperação');
}else{
    console.log ('aprovado');
}
