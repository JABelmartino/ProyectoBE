const fs = require('fs');

class Contenedor{
    constructor(ruta){
        this.ruta = ruta
    }
    async getRandom(){
        try{
            let dataArchivo = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)
            let producto = dataArchivoParse[Math.floor(Math.random()*dataArchivoParse.length)];
            if(producto){
                return producto               
            }else{
                console.log('No se encontro')
            }

        }catch(error){
            console.log(error)
        }
    }
    async getAll(){
        try{
            let dataArchivo = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)
            if(dataArchivoParse.length){
                   return dataArchivoParse
            }else{
                console.log('No hay productos')
            }    
           }catch(error){
            console.log(error)
        }
    }
}
module.exports = Contenedor