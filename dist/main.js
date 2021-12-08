"use strict";
console.log('hola Typesript Plazi');
// Number
//Explicito
let phone;
phone = 1;
phone = 54234567;
// phone = 'hola'; // Error
// inferido 
let phoneNumber = 54234567;
phoneNumber = 123;
// phoneNumber = true; //Erro por tipo
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// Tipo : Bolean
// tipado explicito
let isPro;
isPro = true;
// isPro = 1;
//inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 10; // Error
//String
let username = 'luixaviles';
username = "Luis";
//username = true;//Error por el tipo de dato String
//template String
//Uso de  back-tick ` alt+96
let userInfo;
userInfo = `
    User Info:
    username: ${username}
    firstName: ${username + ' Avisle'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('userInfo', userInfo);
