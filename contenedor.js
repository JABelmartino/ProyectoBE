const fs = require('fs');

class Contenedor{
    constructor(ruta){
        this.ruta = ruta
    }
    async getProductos(){
        try{
            let dataArchivo = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)
            let producto = dataArchivoParse
            if(producto){
                return producto               
            }else{
                console.log('No se encontro')
            }

        }catch(error){
            console.log(error)
        }
    }
    async updateById(obj, id){
        try{
            console.log(obj)
            let dataArchivo = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)
            const objindex = dataArchivoParse.find(prod => prod.id == id)
            console.log(objindex)
            if(objindex){
                await fs.promises.writeFile(this.ruta,JSON.stringify(obj, null, 1))  
            }else{
                return {error: 'No hay productos con ese Id'}
            }    
           }catch(error){
            console.log(error)
        }
    }
    
    async getId(id){
        try{
            let dataArchivo = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)
            console.log(id)
            const objIndex = dataArchivoParse.find(prod => prod.id == id)
            console.log(objIndex)
            if(objIndex){
                return objIndex
            }else{
                return {error: 'No hay productos con ese Id'}
            }    
           }catch(error){
            console.log(error)
        }
    }
    
    async deleteById(id){
        try{
            let dataArchivo = await fs.promises.readFile(this.ruta, 'utf-8')
            console.log(id)
            let dataArchivoParse = JSON.parse(dataArchivo)
            const objindex = dataArchivoParse.filter(prod => prod.id != id)
            console.log(objindex)
            if(objindex){
                await fs.promises.writeFile(this.ruta,JSON.stringify(objindex))
            }else{
                return {error: 'No hay productos con ese ID'}
            }    
           }catch(error){
            console.log(error)
        }
    }
}
module.exports = Contenedor