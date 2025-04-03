/*TODO: Condicionales, para el tema de la condicionales en js, es practicamente igual que en otros lenguajes como java.
   donde contamos con las condicionales tipicas como if, else if y else, junto con el operador ternario el cual nos
   permite ejcutar una linea de codigo u otra, tanto para el retorno de un valor, como para instruccciones normales que
   no retornan un valor, tambien por ultimo contamos de igual manera con la sentencia switch la cual se aplica tal cual
   como se aplicaria en java por ejemplo
 */


/*TODO: importante, recordar siempre el uso de clausulas de guarda para un codigo mas limpio y facil de entender,
        no tener mas de 3 niveles de indentacion y evitar multiples condicionales anidadas, lo mismo que multiples ternarios
 */
const age = 18;
if (age >= 18) {
    console.log('You are of legal age:', age);
}else if (age === 16) {
    console.log('You are a teenager:', age);
}else {
    console.log('You are a children:', age);
}


(age === 18)? console.log('You are of legal age, from ternary operator'): console.log('You are a children');
const legalAge = (age === 18)? 'You are of legal age': 'You are a children';
console.log(legalAge);

switch (age) {
    case 18:
        console.log('You are of legal age from switch');
        break;
    case 16:
        console.log('You are a teenager from switch');
        break;
    default:
        console.log('You are a children from switch');
        break;
}
