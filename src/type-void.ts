// void

// Tipo Explisito
function showInfo(user: any): any {
    console.log('User Info', user.id, user.username, user.firstName);
    //   return 'hola';
}

showInfo({ id: 1, username: 'luixaviles', firstName: 'Luis' });

// Tipo Inferido 
function showFormattedInfo(user: any) {
    console.log('use Info', `
        id: ${user.id}
        username : ${user.username}
        firstName: ${user.firstName}
    `);
}

showFormattedInfo({ id: 1, username: 'luixaviles', firstName: 'Luis' });