// void
// Tipo Explisito
function showInfo(user) {
    console.log('User Info', user.id, user.username, user.firstName);
    //   return 'hola';
}
showInfo({ id: 1, username: 'luixaviles', firstName: 'Luis' });
// Tipo Inferido 
function showFormattedInfo(user) {
    console.log('use Info', `
        id: ${user.id}
        username : ${user.username}
        firstName: ${user.firstName}
    `);
}
showFormattedInfo({ id: 1, username: 'luixaviles', firstName: 'Luis' });
//tipo void, como tipo de dato en variable
let unusable;
unusable = null;
unusable = undefined;
// Tipo: Never
function handleError(code, message) {
    //Process your code here
    // Generate a message
    throw new Error(`${message}. Code: ${code}`);
}
try {
    handleError(404, 'Not Found');
}
catch (error) {
}
function sunNumbers(limit) {
    let sum = 0;
    while (true) {
        sum++;
    }
    // return sum;
}
sunNumbers(10);
// ciclo infinito, programa nunca termina
