const fs = require('fs');

let listarTabla = (base, limite = 10) =>{
  for(let i=1;i<=limite;i++){
    console.log(`${base} * ${i} = ${base*i}`);
  }
}

let crearArchivo = (base) => {
    return new Promise((resolve,reject) =>{
      if(!Number(base)){
        reject(`El valor introducido ${base} no es un numero`);
        return;
      }
      let data = ''
      for(let i= 1;i<=10;i++){
          data += `${base} * ${i} = ${base*i}\n` 
      }
      
      fs.writeFile(`tablas/tabla-${base}`, data, (err) => {
        if (err) reject(err)
        else 
          resolve (`tabla-${base}.txt`)
      });
    }); 
}

module.exports = {
  crearArchivo,
  listarTabla
}





