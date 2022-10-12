//depencia a XMLHttpRequest
const http = require('xmlhttprequest').XMLHttpRequest

const exito =(data) =>{
    const tipos = JSON.parse(data).results
    //recorrer el arreglo de tipos
    tipos.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log(`---------------------`)        
    });
}

const fallo =(status)=>{
    console.log(status)
}

const url = "https://pokeapi.co/api/v2/type"

//Funcion para conectar a una API publica
const get_data =(endpoint , exito, fallo)=>{
    //1.crear el objeto conexion 
    const h = new http()
    //2.abrir una conexion a la API   
    h.open('GET' , endpoint)
    //3.enviar la request definida
    h.send()
    //4.una vex, recibida la response, tratar la info
    h.onload = () => {
        
        if(h.status === 200){
            exito(h.responseText)
        }
        else{
            fallo(h.status)
        }

    }
}

//invocae get_data
get_data(url, exito, fallo)