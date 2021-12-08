console.log('hola Typesript Plazi');

// Number
//Explicito
let phone: number;
phone = 1;
phone = 54234567;
// phone = 'hola'; // Error

// inferido 
let phoneNumber = 54234567;
phoneNumber = 123;
// phoneNumber = true; //Erro por tipo

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Tipo : Bolean
// tipado explicito
let isPro: boolean;
isPro = true;
// isPro = 1;

//inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 10; // Error

//String
let username: string = 'luixaviles';
username = "Luis";
//username = true;//Error por el tipo de dato String

//template String
//Uso de  back-tick ` alt+96
let userInfo: string;
userInfo = `
    User Info:
    username: ${username}
    firstName: ${username + ' Avisle'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('userInfo', userInfo);