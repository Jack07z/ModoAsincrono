const axios = require('axios')

const url = "https://restcountries.com/v3.1/all"

//configuracion de request
let config = {
    url : url,
    method : 'get'
}

//realizar la operacion async
axios(config)
    .then(response => response.data)
    .then(data => {
      data.forEach(function(Capital){
        console.log(`Tipo: ${Capital.capital}`)
        console.log(`------------------`)        
      })  
    })
    .catch((error)=>{
        console.log(Error(`Error : $error`))
    })