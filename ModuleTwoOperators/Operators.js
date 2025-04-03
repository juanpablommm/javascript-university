//TODO: Operadores

/*TODO Operadores aritméticos
    Basicamente en Js se cuenta casi que con los mismos tipos de operadores que en los demas lenguajes como por
    ejemplo Java:
    * "+" para la suma
    * "-" resta
    * "*" multiplicacion
    * "/" division
    * "%" residuo de la division
    * "**" para la potencia (Este solo fue introducido a partir de ES6+), anteriormente teniamos que apoyarnos de Math.pow()
    * "++" para pre-incremento o post-incremento
    * "--" para el pre-decremento o post-decremento
* */

console.log('Arithmetic operators')
const operators = {
    '2 + 3': 2 + 3,
    '3 - 2': 3 - 2,
    '2 * 3': 2 * 3,
    '12 / 3': 12 / 3,
    '12 % 3': 2 % 3,
    '12 ** 3': 2 % 3
};
console.table(operators);


console.log('Increase and decrease Operators')
let number = 2;
let numberThree = 3;
let numberFor = 4;
let numberFive = 5;
const decreaseAndCreaseOperators= {
    '++2': ++number,
    '3++': numberThree++,
    '--4': --numberFor,
    '5--': numberFive--
};
console.table(decreaseAndCreaseOperators);


/*TODO operadores de asignación compuestos, para estos operadore son basciamente la mezcla de operadores de aritmeticos
    junto con los de asignacion, para darle el valor a la misma variable a la cual se aplican, en donde primero
    se establece los operadors aritmeticos y se finaliza con el =, tomando asi el valor que tiene la varibale mas la operacion
    aritmetncia aplicada, por ejemplo x = 5 y la operacion es ++x seria igual a x = x + 5
 */

console.log('compound assignment operators')
let numberSix = 6;
let numberNine = 9;
const compoundAssigmentOperators = {
    '**=2':  `(${numberSix}) -> ${numberSix **= 2}`,
    '+=2':  `(${numberSix}) -> ${numberSix += 2}`,
    '-=2':  `(${numberSix}) -> ${numberSix -= 2}`,
    '/=3':  `(${numberNine}) -> ${numberNine /= 3}`,
    '%=3':  `(${numberNine}) -> ${numberNine %= 3}`,

};
console.table(compoundAssigmentOperators);

/* TODO operadores de comparacion
    * "==" con el cual comparamos si dos variables o datos tienen el mismo valor, este convierte el valor si es
    necesario, por ejemplo al tener una variable 5 de tipo number y una variable de tipo string con valor de '5'
    convertiria el valor del string a tipo number para hacer la comparacion en dado caso
    * "===" con el que comparamos si dos variables o datos, tienen el mismo valor y son del mismos tipo a diferencia del
    anterior, siguiendo el mismo ejemplo al tener una varible tipo number igual a 5 y una varible de tipo string igual
    a 5, nos daria falsa porque apesar de tener el mismo valor, no son del mismo tipo.
    *">", el operador mayor que ya muy bien conocido, el cual nos dira si un numero es mayor que el otro, donde por ejemplo
    4 > 2 seria true.
    *">=", el operador de mayor o igual que, el cual se encargaria de decirnos si es mayor o igual
    *"<", el operador de menor que, el cual nos dira si un numero es menor que el otro, por ejemplo 2 < 4 seria true
    *"<=", el operador de menor o igual que, que nos permitiria saber is un numero es menor o igual al otro
    *"!=", este operador nos permitra saber si un valor de una variable es diferente al otro, aplicando una conversion
    si es necesario en dado caso que las varibles no sean del mismo tipo, por ejemplo 5 de tipo number y 6 de tipo string,
    nos daria true, porque son diferentes, pero aplica una conversion del string a number para aplicar la comparacion.
    * "!==", exactamente lo mismo que el anterior pero con la diferencia de que tambien compara los tipos de datos,
    estos tiene que ser iguales.
 */

console.log('Comparison Operators');
const comparisonOperators = {
    "5 == '5'": 5 == '5',
    "5 === '5'": 5 === '5',
    '5 > 3': 5 > 3,
    '5 >= 5': 5 >= 5,
    '5 < 3': 5 < 3,
    '5 <= 5': 5 <= 5,
    "5 != '5'": 5 != '5',
    "5 !== '5'": 5 !== '5'
};
console.table(comparisonOperators);

/* TODO Operadores de logicos
    *cabe recordar que con estos hacemos refrencia a los valores de la tala de verda, como disyuncion, conjuncion y ngeacion.
    * "&&" donde es el equivalente a AND (Conjuncion)
    * "||" es el equivalente a OR (Disyuncion)
    * "!" seria la negacion de un valor logico
    Para los operadores logicos AN y OR, tenemos que aplican el proceso de corto circuito, es decir, si para AND por jemplo
    el primer valor logico es false, ya no evaluara el segundo dado que neceita que ambos fueran true.
    Ahora para el OR en dado caso de que el primer valor logico sea true, no se procedera a evaluar el sgundo valor logico
    dado que ya ha pasado un validacion.
    * "??" Ahora tambien, contamos con el operador ??, el cual evaluara basicamente evaluara si el valor del operando de la izquierda
    es null o undefined, si es asi retornara el valor del operando de la derecha, cabe mencionar que solamente evaluara valores
    de null o undefined para el operando de la izquierda, si este no contiene uno de estos valores no pasara nada
* */

console.log('Logic Operators')
const logicOperators = {
    'false && true': false && true,
    'true || flase': true && false,
    'undefined ?? 4': undefined ?? 4
}
console.table(logicOperators);


//TODO: Operadores Condicionales
let f;
console.log('value from f;', f)

let temp = Infinity;
console.log("typeof", temp -1, typeof temp);


console.log(typeof Infinity);          // NaN
console.log("texto" * 5);    // NaN
console.log(Math.sqrt(-1));  // NaN