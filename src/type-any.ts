// Tipo esplicito 
let idUser: any;
idUser = 1; // number
idUser = '1'; //string
console.log('idUser', idUser);

//  Tipo Inferio 
let otherId;
otherId = 1;
otherId = '1';
console.log('otherId', otherId);

let surprise: any = 'hello typescript';
// surprise.sayHello(); //Error
const res = surprise.substring(6); //error
console.log('res', res); 
