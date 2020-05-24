const fs = require('fs');

let base = 5;
let data = '';
console.clear();

for (let base = 0; base <= 10; base++) {

    data = ' ';
    for (let i = 0; i <= 10; i++) data += `${base}*${i} = ${base*i}\n`;

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) throw err;
        console.log(`The file has El archivo tabla-${base}.txt ha sido creado!`);
    });
}