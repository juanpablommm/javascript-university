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
   quedando esta variable como si fuese una variable global, también cabe mencionar problemas de re-declaracion de la variable,
   una variable declarada con var, puede ser re-declara lo cual puede provocar sobrescrituras acidentales y errores que sean dificiles de rastrear,
   otro de los problemas es el Hoisting, lo cual basicamente se puede describir como el poder usar la variable antes de ser declarada.
*  lef => se debe usar para un ambito de variable local o de  bloque, en donde la varible es mutable, puede cambiar de valor
*  const => para la declaracion de constantes, este tambien tiene un ambito de varible a nivel de bloque, y se debe de usar,
    cuando la varible no mutara, el valor se mantiene

   TODO
*   En cuanto a la reglas de definicion cabe recordar el uso de lowerCamelCase, y en donde se siguen algunas practicas
    como cuando se usa _ como primer caracter del nombre de la variable, lo cual se suele emplear cuando se manejaba OOP,
    en donde se designan variables de esta forma, para identificar mas facil que estas son privadas y no debarian de ser accedidas
    directamente sino con los respectivos metodos getters and settters.
    $ ahora cundo se usa este simbolo de dollar como primer caracter en la declaracion de una varible es tambien como
    convencion para identificar que dicha variable esta siendo usada para referenciar a un elemento de DOM o esta forma la
    emplean algunos frameworks, como puede ser el caso de Veu o JQuery.
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
 * null => Aquneu bien este no podria ser catalogado como tipo de datos, sino mas bien como un valor a un tipo de dato,
 el cual usa para indicar la ausencia de referencia, como tal no se crea un objeto en memoria, y pertence a los primitivos, pero
 si se utiliza typeof, al establecer null como valor de una variable se obtedra un un typeOf de tipo Object,
 a pesar de que null esta catalogado como tipo primitivo, pero esto se debe a un bug historio de js,
 con respecto a la utlizacion de los bits de referencia para este tipo.
 * symbol => este tipo de dato fue añadido a partir de ES6+, y como tal se usa para crear un tipo de dato unico,
 donde por mas que dos symbol, tengan el mismo valor al compararlos no saran iguales, su referencia en memoria sera unica
 para cada uno, se suelen utilizar para crear propiedades privadas en objectos.
 * bigInt => bigInt fue introducido a partir de ES11+, para tipos de datos numbers que ya son muy grandes, spobrepasando el
 el valor maximo que tenemos establecido en el wrapper Number.MAX_SAFE_INTEGER

*/

/*TODO: Wrappers para los tipos de datos primitivos
    Al igual que en Java, js, tambien tiene su tipos de datos envoltorios para trabjar prmitivos
    como tipos objects y poder mandar a llamar metodos especificos de trabajo.
    * string => String
    * number => Number
    * boolean => Boolean
    * symbol => Symbol es un primitivo puro, por lo cual no tiene una clase envoltoria,
    y este se define con ayuda de la funcion Symbol().
    * bigInt => BigInt es un prmitivo puro, por lo cual no tien una clase envoltorio como otro primitivos,
     para la creacion de un bigInt, se puede realizar tanto agregando una n al final del numero
    lo cual es una sintaxis directa, o con ayuda de la funcion BigInt()
* */


const valueTablePrimitivesType = {
    'holaaa': {
        'typeOf': typeof 'hello',
        'wrapper': "new String('heelo')"
    },
    '334': {
        'typeOf': typeof 334,
        'wrapper': 'new Number(334)'
    },
    '334.99': {
        'typeOf': typeof 334.99,
        'wrapper': 'new Number(334.99)'
    },
    'true': {
        'typeOf': typeof true,
        'wrapper': 'new Boolean(true)'
    },
    '761829n o BigInt(761829)': {
        'typeOf': typeof BigInt(761829),
        'wrapper': 'Es un prmitivo puro'
    },
    'Symbol("Id")': {
        'typeOf': Symbol("Id"),
        'wrapper': 'Es un prmitivo puro'
    },
};
console.table(valueTablePrimitivesType);


/*TODO Como nota importante, el suso de lso wrapper, como declaracion explicita, no es una muy buena practica en JS,
    ya que declarar una variable con un wrapper, no es bien visto, por ejemplo const number = new Number(323);
    ya que cuando necesitamos trabajar con los metodos para un tipo de dato especifico que nos provee su detemrinado wrapper,
    Js, hace un casteo automatico del tipo primitivo al wrapper; js por debajo si necesitamos llamar a metodos proprios de un wrapper
    determinado por ejemplo del String,se encargara de crear una variable wrapper por debajo sin que nos demos cuenta
    llamar al metodo que necesitemos y luego ser destruida, por ende no necetiamos crear explicitamente un wrapper, sino
    que con los tipos de datos primitivos podremos utilizar los metodos del wrapper correspondiente y js se encarara de aplicar
    un autoboxing por debajo.
    Lo importante a tener en cuenta es que en js siempre se debe de trabajar con primitivos, nunca con los wrapper,
    por lo antes mencionado, problemas de confunsion en el codigo, problemas de rednimiento ya que los wrapper son objects,
    entre otras cosas, solamente deberiamos de utlizarlos si ya trabajamos a lo mejor con algun tipo de libreria muy vieja
    que necesita de ellos de lo contrario no es buena practica.
 */

const numberTestNotWrapper = 45;
console.log('metodo toString, casteo automatico de primivito number a su wrapper:',
    numberTestNotWrapper.toString()) //TODO, se nota como ya podemos utilizar los metodos del wrapper correspondiente.

//TODO no debe de utilizarse "var" ejemplo de re-declaracion al usar var
var numberOne = 11; // TODO ya no es recomendable el suso de var a partir de ECS6+
var numberOne = "Hello World";
console.log(`numberOne declared with var: ${typeof numberOne}`); //TODO el operador typeof nos permite saber el tipo de una variable



let numberTwo = 12.4;
let $myNumber = 10
let _myNumber = 10000;



console.log(`12.4 data type is: ${typeof numberTwo}`);
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

/*TODO: Variables de tipo Objectos
    Los Objectos en js no son nada mas que estructuras de datos que nos permiten almacenar propiedades con sus
    respectivos valores, en formato de pares de (clave-valor).
    Los objectos son mutables; puden modificarse despues de su creacion, podiendo cambiarse, agregarse o eliminarse
    propiedades de estos desppues de su creacion, ahora si queremos evitar este comportamiento y bloquearlos, brindadole
    al objecto creado un tipo de inmutabilidad, al momento de crear el objecto podemos llamar al metodo freeze de Object
    pasandole como parametro el objecto que queremos crear, asi de esta manera, si intendamos reasignar, eliminar o
    agregar nuevas propiedades a nuestro objecto no tendra ningun efecto sobre el.
    * Algo a tener en cuenta es que al momento de crear un objecto, podemos crear el nombre de las propiedades
    entre "" o sin comillas; lo ideal, las buenas practicas indican que el nombre de las propiedades del objecto debe
    de ir sin comilas, pero habran casos en donde si el nombre de la propiedade tiene caracteres espepciales, en dicho
    caso si se utlizaria "" para definir el nombre de las propiedades del objecto, de lo contrario no.
    * Ahora cuando acedemos a las propiedades de un objecto podemos hacerlo con . o con las [] escribiendo el nombre de
    la propiedad entre "" dentro de las [], al igual que con el punto anterior, esto no debria de hacerce si el nombre
    de la propiedad esta correctamente definido en el objecto, pero de tenerce un nombre con caracteres especiales o que
    comience con un numero o demas casos similares, entonces utilizariamos las [] para poder acceder a la propiedad,
    otro caso en el que puede suceder es que el nombre de la propiedad del objecto este en una variable ya sea porque
    venga en tiempo de ejecucion u otro motivo, entonces en dicho caso utilizariamos tambien [] ya que desconocemos el nombre,
    este esta en una variable, entonces colocamos la variable entre las [].

    TODO: Inmutablidad de primitivos vs mutabilidad de Objects
        * Algo a tener en cuenta es que cuando creamos una variable primitiva, si cambiamos el valor, en realidad no
        se esta cambiando el valor como tal, lo que pasa es que se esta creando un nuevo valor en memoria para dicha variable.
        * Ahora bien cuando se trata de objectos, si cambiamos el valor de una de sus propiedades, el objecto en si cambia,
        mas no se crea un nuevo objecto, el objecto de por si muta, se ajusta al cambio sobre la propiedad, ya sea que
        la propiedad se modifique, se agregue una nueva o se elimine.

 */
console.log("-------------------------------Objects----------------------------------------")
const myObject = {
    name: "Juampis",
    lastName: "Gonzales",
    say: (name) => console.log(`Hello World!`),
};

console.log('My object is:', myObject, 'type is:', typeof myObject);
console.log('Property name of myObject is:', myObject.name);
console.log('type of say property:', typeof myObject.say);

myObject.fullName =  'Hernezto perez el frilejon';
console.log('new property at myObject:', myObject.fullName);
delete myObject.say;
console.log('This is myObject after the delete:', myObject);


const propertyName = 'address';
const myObjectTwo = Object.freeze({
    name: 'John',
    lastName: 'Alexander',
    address: 'Avenida SiempreViva',
});
console.log('This is myObjectTwo:', myObjectTwo);
myObjectTwo.email = 'alexander@gmail.com';
console.log('This is myObjectTwo after:', myObjectTwo);
console.log('This property address is:', myObjectTwo[propertyName]);

//TODO: Otras formas de crear objectos, las mas usada y por buenas practicas es simplmente con {}
const myObjectForConstructor = new Object({name: 'John'});
myObjectForConstructor.email = 'Jhon@gmail.com';
console.log('This is myObjectForConstructor:', myObjectForConstructor);

/*TODO: esta forma de creacion de objectos se utlizar cuando se requiere una herencia de proptotipos,
    basciamente el proximo objecto creaddo heredara las propiedades del que se paso como parametro al
    metodo create.
 */
const myObjectWithCreateMethod = Object.create(myObjectTwo);
/*TODO: en este caso las propiedades
*  no se muestran en el log, pero hay estan, existe una cadena de prototipos */
console.log('This is myObjectWithCreateMethod:', myObjectWithCreateMethod);
myObjectWithCreateMethod.age = 24;
console.log('This is myObjectWithCreateMethod:', myObjectWithCreateMethod);
console.log('This is the name of myObjectWithCreateMethod:', myObjectWithCreateMethod.name);

//TODO: para ver las propiedades heradadas del prototipo utilizamos Object.getPrototypeOf
console.log('This is myObjectWithCreateMethod:', Object.getPrototypeOf(myObjectWithCreateMethod));
