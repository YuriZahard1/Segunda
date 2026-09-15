const nombre = 'Max';
let age = 29;
const hobbies = true;

age = 30;
function summarizeUser(userName, userAge, userHobbie) {
    return (
        'El nombre es ' +
        userName + 
        ' y su edad es ' +
        userAge +
        ' y el usuario tiene hobbies: ' +
        userHobbie ? 'Tiene hobbies' : 'No tiene hobbies'
    )
}

const add = (a, b) => a + b;
console.log(add(1, 2));
console.log(summarizeUser(nombre, age, hobbies));

