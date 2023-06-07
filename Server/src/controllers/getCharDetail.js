const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharDetail(req, res) {
  try {
    const { id } = req.params;
    const response = await axios.get(URL + id);
    
    const character = {
      id: response.data.id,
      name: response.data.name,
      image: response.data.image,
      gender: response.data.gender,
      species: response.data.species,
      status: response.data.status,
      origin: response.data.origin,
    };
    
    res.status(200).json(character);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = { getCharDetail };
