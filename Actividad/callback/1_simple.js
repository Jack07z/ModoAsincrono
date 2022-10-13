const url = "https://rickandmortyapi.com/api/character"

//depencia a XMLHttpRequest
const http = require('xmlhttprequest').XMLHttpRequest

function exito(data){
    const tipos = JSON.parse(data).results
    //recorrer el arreglo de tipos
    tipos.forEach(element => {
        console.log(`Personaje: ${element.name}`)
        console.log(`---------------------`)        
    });
}

function fallo(status){
    console.log(status)
}

//Funcion para conectar a una API publica
function get_data(endpoint , exito, fallo){
    //1.crear el objeto conexion 
    const h = new http()
    //2.abrir una conexion a la API   
    h.open('GET' , endpoint)
    //3.enviar la request definida
    h.send()
    //4.una vex, recibida la response, tratar la info
    h.onload = function(){
        exito(h.responseText)
    }
}
//invocae get_data
get_data(url, exito, fallo)