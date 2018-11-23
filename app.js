
const argv = require('yargs')
    .command('listar','Imprime en consola la tabla de multiplicar',{
        base:{
            demand:true,
            alias:'b'
        },
        limite:{
            alias:'l',
            default:10
        }
    }) 
    .help()
    .argv;
//const fs = require('express');
//const fs = require('./fs');

const { crearArchivo,listarTabla }  = require('./multiplicar/mltiplicar');
let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base,argv.limite);
    break;

    case 'crear':
        crearArchivo(argv.base)
        .then(archivo => console.log(`Archivo creado: ${archivo}`))
        .catch(err => console.log(err));
    break;
    default:
        console.log('comando no reconocido');
}


//console.log(process.argv);

console.log(argv);

//let parametro = argv[2];
//let base = parametro.split('=')[1]

/*
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err));
*/
