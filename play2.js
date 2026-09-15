const hobbies = ['Sports', 'Cooking'];

console.log(hobbies.map((hobby) => 'Hobby: ' + hobby));

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);

hobbies.push('Programming');
console.log(hobbies);

const hobbiesCopiados = [...hobbies, 'Anime'];
console.log(hobbiesCopiados);

const persona = {nombre: 'Max', edad: 29};
console.log(persona);

const personaCopiada = {...persona, ciudad: 'Madrid'};

console.log(personaCopiada);

const toArray = (...args) => {
    return args;
}

toArray(1, 2, 3, 4, 5);
console.log(toArray(1, 2, 3, 4, 5));

const persona2 = {name: 'Max', age: 29};
const printName = ({name}) => {
    console.log(name);
}

const {name, age} = persona2;
console.log(name, age);
console.log(persona2);

const [hobby1, hobby2] = hobbies;
console.log(hobby1);
console.log(hobby2);

const hobbieSi = true;
console.log(hobbieSi ? 'Tiene hobbies' : 'No tiene hobbies');

const person = {
    nombre: 'Max',
    age: 29,
    greet () {
        console.log('Hola, soy ' + this.nombre);
    }
};

person.greet();