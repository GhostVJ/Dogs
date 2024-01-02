const axios = require('axios');
const { where, Sequelize } = require('sequelize');

const {Dogs, apiKey} = require("../db");


const createDogsDB = async (image, name, height, weight, lifespan) => {
    const newDog = await Dogs.create({image,name,height,weight,lifespan});

    return newDog
};

const getDogById = async(id, fuente) => {
//Busqueda en api
const dogs = fuente === "api" ? (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}/?api_key=${apiKey}`)).data : await Dogs.findByPk(id);
return dogs 
}


const cleanInfoApi = (array) => {
    return array.map(dog=>{
        //console.log("Procesos....Clean id:"+dog.id);
        return {
            image: dog.reference_image_id,
            name: dog.name,
            height: dog.height,
            weight: dog.weight,
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