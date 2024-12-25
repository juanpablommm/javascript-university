console.log("hello world");
console.log("how are you?");

/*TODO Cabe recordar que JS, es un lenguaje interpretado lo que quiere decir que se traduce
   y ejecuta linea por linea. Tambien cabe mencionar que JS tiene un tipado devil
    a diferencia de lenguajes compilados como JAVA, C# o demas, lo que significa que no es
    necesario definir el tipo de dato de una variable al momento de declararla como suele suceder con los lenguajes
    compilados, y también que el tipado es dinamico, se puede cambiar el tipo de dato de una variable, por ejemplo
    una variable que empiece siendo numerica termine siendo un string, incluso este tipado dinamico puede suceder en
    tiempo de ejecución.
*/


//TODO Variables

/*TODO
   para la declaracion de variables en javaScript, cabe recordar las formas en que podemos hacerlo:
*  var => el cual ya no es recomendado, esto es para versiones anteriores a ECMAScript6, por problemas
   como, que var no respecta los bloques, al establecer var, en un ambito local puede ser accedida desde fuera del bloque,
   quedando esta variable como si fuese una variable global, también cabe mencionar problemas de re-delcaracion de la variable,
   una variable declarada con var, puede ser re-declara lo cual puede provocar sobrescrituras acidentales y errores que sean dificiles de rastrear,
   otro de los problemas es el Hoisting, lo cual basicamente se puede describir como el poder usar la variable antes de ser declarada.
*  lef => se usar para un ambito de variable local o de  bloque
*  const => para la declaracion de constantes

   TODO
*   En cuanto a la reglas de definicion cabe recordar el uso de lowerCamelCase, y en donde se siguen algunas practicas
    como cuando se usa _ como primer caracter del nombre de la variable, lo cual se suele emplear cuando se manejaba OOP,
    en donde se designan variables de esta forma, para identificar mas facil que estas son privadas y no debarian de ser accedidas
    directamente sino con los respectivos metodos getters and settters.
    $ ahora cundo se usa este simbolo de dollar como primer caracter en la declaracion de una varible es tambien como
    convencion para identificar que dicha variable esta siendo usada para referenciar a un elemento de DOM o esta forma la
    empelan algunos frameworks, como puede ser el caso de Veu o JQuery.
* */


/*
TODO Tipos Primitivos
 Lost tipos de datos primitivos en js son:
 * Number => para los datos numericos, a diferencia de Java por ejemplo no se tienen dos tipos de datos para los
 numeros decimales y enteros, en js ambos son manejados con el tipo Number, y cuando es un numero decimal, cuyo
 numero después del punto es 0, se expresa como entero.
 * String => al igual que Java para las cadenas de caracteres, estos se pueden expresar con "", '' ``, para manejar la interpolacion
 * Boolean => Dato booleano tal cual, true o false
 * Undefined => este tipo de dato se utiliza para indicar la aucensia de valor
 * null => Este se usa para indicar la ausencia de referencia, como tal no se crea un objecto en meoria, si se utiliza typeof, se obtiene un tipo Object
 * symbol => este tipo de dato fue añadido a partir de ES6+, y como tal se usa para crear un tipo de dato unico,
 donde por mas que dos symbol, tengan el mismo valor al compararlos no saran iguales, su referencia en memoria sera unica
 para cada uno, se suelen utilizar para crear propiedades privadas en objectos.
*/

//TODO no debe de utilizarse "var" ejemplo de re-declaracion al usar var
var numberOne = 11; // TODO ya no es recomendable el suso de var a partir de ECS6+
var numberOne = "Hello World";
console.log(`numberOne declared with var: ${typeof numberOne}`); //TODO el operador typeof nos permite saber el tipo de una variable



let numberTwo = 12.4;
let $myNumber = 10
let _myNumber = 10000;



console.log(`12.4 data ype is: ${typeof numberTwo}`);
console.log($myNumber);
console.log(_myNumber, " data type is: ", typeof _myNumber);

class Users{

    _names
    /*TODO suele utilizarse esta forma para identificar que es una variable privada OOP,
        pero esto no hace que la variable sea privada en si solamente da a entender la intencion, ahora cuando se trabaja con
        TypeScript con el tipado fuerte que este provee no es necesario dado que contamos con modificadores de acceso ya*/

    constructor(name) {
        this._names = name;
    }

}