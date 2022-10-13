const needle = require('needle')

const url = "https://isro.vercel.app/api/spacecrafts"

const f = async() => {
    try {
        let response = await needle('get' , url )
        const tipos = response.body.spacecrafts
        tipos.forEach((element)=>{
            console.log(`Serie: ${element.name}`)
            console.log(`---------------------`)        
        })
    } catch (error) {
        console.log(Error(error))
    }
}

f()

