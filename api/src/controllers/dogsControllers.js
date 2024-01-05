const axios = require('axios');
const { where, Sequelize, DatabaseError } = require('sequelize');

const {Dogs, Temperaments, apiKey} = require("../db");


const createDogsDB = async (image, name, height, weight, lifespan, temperament) => {
    const newDog = await Dogs.create({ image, name, height, weight, lifespan });
    // temperamentS = temperament.split(",");
    // for (let i=0;i<temperamentS;i++) {
    console.log("post exito");
    // }
    const newTemeperament = "";
    return newDog;
  };
  

const getDogById = async(id, fuente) => {
    if (fuente==="api") {
        const DogsAPI = (await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${apiKey}`)).data;
        const DogsApiClean = cleanInfoApi(DogsAPI);
        for(let i=0;i<DogsApiClean.length;i++) { if (DogsApiClean[i].id==id){ return DogsApiClean[i]; }}
    } else {
        const DogsPlu = await Dogs.findAll();
        return DogsPlu
    }
 
  
    //console.log(DogsApiClean);
    
//Busqueda en api
// const dogs = fuente === "api" ? (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}/?api_key=${apiKey}`)).data : await Dogs.findByPk(id);
// return dogs 


}


const cleanInfoApi = (array) => {
    return array.map(dog=>{
        //console.log("Procesos....Clean id:"+dog.id);
        return {
            id: dog.id,
            image: dog.image.url,
            name: dog.name,
            height: dog.height.metric,
            weight: dog.weight.metric,
            temperaments: dog.temperament,
            lifespan: dog.life_span,
        };
    });
};

const getAllDogs = async() =>{
    const DogsDB = await Dogs.findAll();
    const DogsAPI = (await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${apiKey}`)).data;
    const DogsApiClean = cleanInfoApi(DogsAPI);
    //console.log(DogsApiClean);
    return [...DogsDB, ...DogsApiClean]
}

const getDogByName = async(name) => {

    const DogsRaceDB = await Dogs.findAll({
        where: {
            name: {
              [Sequelize.Op.iLike]: `%${name}%`,
            },
          },
    });

    const DogsRaceAPI = (await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=${apiKey}`)).data;

    

    const DogsApiClean = cleanInfoApi(DogsRaceAPI);

    return [...DogsRaceDB, ...DogsApiClean]
}

module.exports = {
    createDogsDB,
    getDogById,
    getAllDogs,
    getDogByName,
}; 