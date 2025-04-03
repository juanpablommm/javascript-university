/*TODO: Tipos de Conversiones en JS
    En Js contamos con dos tiṕos de convercionones de datos:
    *Convercion implicita o Coercion, la cual es basicamente la que se da por naturalidad en el lenguaje,
    al ser un lenguaje de tipado debil y dinamico,y esta se da basicamente cuando tenemos dos tipos de datos
    en los cuales aplicamos alguna operacion, js se encaragra de convertir automaticamente los tipos para qeu sean iguales,
    como puedo ocurrir si tenemos un numero y una cadena, js se encarara de convertir los tipos a iguales
    para poder aplicar la operacion; lo cual pude llevar a errores y bugs en los programas si no se entiende bien.
    *Convercion Explicita, esta se da cuando nosotros mismos de manera manual, indicamos a js que convirta un tipo de
    dato a otro que nesecitamos, esta se puede hacer con tres tipos que son a:
    to string
    to number
    to boolean
 */

//TODO: Ejemplo de Convercion implicita o Coercion
const examplesForImplicitConversion = {
    "1 + '1'": `value: ${1 + '1'} typeOf: ${typeof (1 + '1')}`, /*TODO: se convierte el numero a string, dado que el + no lo toma
                                                                        como operacion aritmetica, sino como concatenacion*/
    "'1' + 1": `value: ${'1' + 1} typeOf: ${typeof ('1' + 1)}`,

    "1 + 3 + '3'": `value: ${1 + 3 + '3'} typeOf: ${typeof (1 + 3 + '3')}`, /*TODO: Se realiza la operacion de suma que hay de primero,
                                                                               de izquierda a aderecha como suele suceder y luego
                                                                               pasa de igual manera que el + se convertie en una
                                                                               operacion de concatenacion, realizandose asi una
                                                                               convercion implicita en la que el numero se convierte
                                                                               a string*/

    "'3' + 1 + 3": `value: ${'3' + 1 + 3} typeOf: ${typeof ('3' + 1 + 3)}`, /*TODO: se igual manera se le de izquierda a derecha,
                                                                                en donde el resulta de '3' + 1 ya sabemos que es
                                                                                un concatenacion asi que tenemos un string que al seguir
                                                                                la operacion sera el mismo caso, convercion implicita a
                                                                                string del numero 3*/

    "'3' * 4": `value: ${'3' * 4} typeOf: ${typeof ('3' * 4)}`, /*TODO: en este caso la convercion implicita fuciona de distinta manera
                                                                    a pesar de ser un caso similar, y es que como el operador * no se usa
                                                                    para la concatenacion como pasa con +, entonces se hace la convercion
                                                                    implicita el string a number, para poder ejecutar la operacion, mismo
                                                                    caso sucede con los demas operadores aritmeticos, como /, %, ** -*/

    "4 * '3'": `value: ${4 * '3'} typeOf: ${typeof ('4' * '3')}`,
    "'3'** 2": `value: ${'3' ** 2} typeOf: ${typeof ('3' ** 2)}`,
    "'3' % 2": `value: ${'3' % 2} typeOf: ${typeof ('3' % 2)}`,
    "'3' - 2": `value: ${'3' - 2} typeOf: ${typeof ('3' - 2)}`,
    "null == 'null'": `value: ${null == 'null'} typeOf: ${typeof (null == 'null')}`, /*TODO: Convercion implicita a boolean, convierte el
                                                                                        string a su valor boleano, para poder ejercer la operacion
                                                                                        de comparacion y dar un resultado*/

};

console.log('Implicit Conversion')
console.log(examplesForImplicitConversion);

/*TODO: Importante recordar siempre Truthy/Falsy: Truthy/Falsy quiere decir basicamente que en js cualquier valor
    puede ser evaluado en un contexto boleano, clasificandosecomo Truthy, lo que se evalua como true, y falsy como false.

 */

const truthyFalsy = {
    falsy: [false, 0, -0, 0n, "", null, undefined, NaN],
    truthy: [true, "0", "false", [], {}, function () {}, 3, 7n]
}
console.log('Truthy/Falsy');
console.table(truthyFalsy);


/*TODO: Ejmplos de Convercion explicita, para tener en cuenta y es que en js, no existe un casteo como puede
    haber en java con los (), para eso es que tenemos la conversion explicita, ya en TypeScript si tendriamos
    el operador as, que seria equivalente a ese tipo de casteo que se maneja en java*/
const examplesExplicitConversion = {
    'number to string': `4 typeOf ${typeof (String(4))}`,
    'string to number': `'4' typeOf ${typeof (Number('4'))}`,
    'number to boolean': `4 => value: ${Boolean(4)} typeOf ${typeof (Boolean(4))}`,
    'string to boolean': `"" => value: ${Boolean("")} typeOf ${typeof (Boolean(""))}`,
    'boolean to number': `true => value: ${Number(true)} typeOf ${typeof (Number(true))}`,
    'boolean to string': `true => value: ${String(true)} typeOf ${typeof (String(true))}`,
};
console.log('Explicit Conversion')
console.table(examplesExplicitConversion);

/*TODO: para una convercion explicita, cuando necesitamos datos de tipo boolean, tambien podemos hacerlo con !!
     sin necesidad de utilizar la funcion de conversion, donde el primer ! estara trasnformando el valor a boolean,
     y negandolo, y el segundo ! estara convirtiendolo a su valor original*/
const testBoolean = 'hello';
const testBooleanTwo = '';
console.log('testBoolean:', !!testBoolean, typeof !!testBoolean);
console.log('testBooleanTwo:', !!testBooleanTwo, typeof !!testBooleanTwo);

/*TODO: para el tipo de convercion explicita de string a number,m tambien podemos aplicar otra forma distinta a al funcion
        de conversion Number(), simplemente anteponiendo el operador unario + al string, se estaria aplicando este tipo de
        conversion explicita
*/
const numberAtString = +'32';
const numberAtStringTwo = +'3242fd';
console.log('numberAtStringTwo:', numberAtStringTwo, typeof numberAtStringTwo);




/*TODO: Caundo aplicamos la conversion explicita, algo super importante y a tener en cuenta es que anteriormente se
        manejaba dicha conversion explicita con los wrappers, y podemos encontrarnos casos en los observemos esto, pero
        dado que el uso de los wrappers en js, se considera una mala practica, para el tema de la conversion explicita pasa lo
        mismo, por ende es mejor usar las funciones de conversion, como son String(), Number(), Boolena(), Symbol(),  BigInt(),
        aunque con estos dos ultimos agregados desde ES6+ y ES11 para el caso del bigInt, no se tienen wrappers.
        todoo esto, tambien deriba tambien en lo relacionado con el autoboxing que maneja js, que al utilizar un primitivo,
        podemos usar los metodos del wrapper correspondiente sin convertirlo manualmente, pues por debajo js, crea un wrapper
        y gestiona su ciclo, creandolo temporalmente y eliminandolo despues de usar el metodo que necesitemos. lo mismo pasa
        cuando al hacer una convercion explicita utilizaramos lso wrapper, estariamos creando objectos en memoria que afectarian
        ligeramente el rendimiento y serian objectos incesarios, dado que la funcion de conversion nos da ya el valor primitivo
        a diferencia de hacer al convercion explicita con el wrapper, del cual dentriamos que llamar al metodo valueOf para
        obtener el valor primitivo
        *Dentro de las funciones de conversion tambien tenemos el parseInt() y parseFloat() para convertir a numero entero o decimal
        segun se requiera, mismas funciones que son parte de los metodos del wrapper Number*/

//todo ejemplo conversion explicita con primitivo, (no es recomendado hoy en dia)
const numberThree = 3;
console.log('typeOf numberThree:', typeof new String(numberThree), typeof new String(numberThree).valueOf());
const numberThreeString = '3';
console.log('typeOf numberThreeString:', typeof new String(numberThreeString), typeof new Number(numberThreeString).valueOf());
