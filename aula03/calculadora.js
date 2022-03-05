/* 1 - Criar um arquivo calculadora.js no qual serão necessários os quatro arquivos feitos
anteriormente.*/

import somar from './modules/somar.js'
import subtrair from './modules/subtrair.js'
import dividir from './modules/dividir.js'
import multiplicar from './modules/multiplicar.js'

/*2 -Executar a função que permite adicionar e a função que permite subtrair, passando
como argumentos quaisquer dois números. Mostrar os resultados no console. */
console.log(somar(5,4));
console.log(subtrair(4,2));

/*3 -Executar a função que permite a multiplicação, passando como argumentos quaisquer
dois números. Mostrar o resultado no console.*/
console.log(multiplicar(4,5));

/* 4 - Executar a função que permite multiplicar, passando agora como um dos dois
argumentos, o número zero. Mostrar o resultado no console*/
console.log(multiplicar(4,0));

/*5 - Executar a função que permite a divisão, passando como argumentos quaisquer dois
números. Mostrar o resultado no console. */
console.log(dividir(4,5));

/*6 -Executar a função que permite dividir, passando agora como um dos dois argumentos,
o número zero. Mostrar o resultado no console.*/
console.log(dividir(0,5));
