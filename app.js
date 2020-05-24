const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

let comando = argv._[0];


switch (comando) {

    case 'listar':
        console.log('Comando: Listar\n');
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log('Comando: Crear\n');
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado:`, colors.bgRed(archivo)))
            .catch((err) => console.log(err));
        break;

    default:
        console.log('Comando incorrecto!');
        break;


}



// console.log('Limite', argv.limite);
// // console.clear();