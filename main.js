/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

let numberOne = Number(prompt('Digite o primeiro número.'))
let numberTwo = Number(prompt('Digite o segundo número.'))

let sum = numberOne + numberTwo
let subtraction = numberOne - numberTwo
let multiplication = numberOne * numberTwo
let division = numberOne / numberTwo

let restDivision = numberOne % numberTwo

alert(`A soma do número ${numberOne} e ${numberTwo} é ${sum}`)
alert(`A subtração do número ${numberOne} e ${numberTwo} é ${subtraction}`)
alert(`A multiplicação do número ${numberOne} e ${numberTwo} é ${multiplication}`)
alert(`A divisão do número ${numberOne} e ${numberTwo} é ${division}`)
alert(`O resto da divisão do número ${numberOne} e ${numberTwo} é ${restDivision}`)

if (sum % 2 != 0 ) {
  alert(`A soma dos números ${numberOne} e ${numberTwo} é um número impar: ${sum}`)
}else{
  alert(`A soma dos números ${numberOne} e ${numberTwo} é um número par: ${sum}`)
}

if (numberOne == numberTwo) {
  alert(`Osnúmeros inseridos são iguais`)
}else{
  alert(`Os números inseridos são diferentes`)
}