const axios = require("axios");

const getCharacterByDetails = (res,id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data =>{
        const character ={
            name: data.name,
            id: data.id,
            image: data.image,
            gender: data.gender,
            species: data.species,
            status: data.status,
            origin: data.origin
        }
        res
        .writeHead(200,{"Content-Type": "application/json"})
        .end(JSON.stringify(character))
    })
    .catch((error) => res
    .writeHead(500,{"Content-Type": "text/plain"})
    .end(`Personaje con id ${id} no encontrado`))
}
module.exports = getCharacterByDetails;