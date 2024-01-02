const axios = require('axios');
const { where, Sequelize } = require('sequelize');

const {Temperaments, apiKey} = require("../db");

const newTemperaments = async (name) => {
    try {
      const existingRecord = await Temperaments.findOne({ where: { name } });
      if (!existingRecord) {
        await Temperaments.create({ name });
      }
    } catch (error) {
      console.error("Error creating or finding temperament:", error);
      throw error; // Re-throw the error to allow for proper handling
    }
  };
  

const splitAndTrim = async(string) => {
    string = string.trim();
    const array = string.split(",");
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i].trim();
      console.log(array[i]);
      await newTemperaments(array[i]);
    }
}

const TemperamentsToStr = (arrayOfObjects) => {
    const temps = [];
  
    for (const object of arrayOfObjects) {
        temps.push(object.temperament);
    }
  
    return temps;
  }

const FilterInfoApi = (array) => {
    return array.map(dog=>{
        //console.log("Procesos....Clean id:"+dog.id);
        return {
            temperament: dog.temperament,
        };
    });
};



const getAllTemperaments = async() => {
    const allTemDB = await Temperaments.findAll();
    console.log(allTemDB);
    if (allTemDB===null || allTemDB===undefined || allTemDB==="" || allTemDB.length===0) {
        const allTemApi = (await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${apiKey}`)).data;
        const TempAPi = FilterInfoApi(allTemApi);
        const TemStr = TemperamentsToStr(TempAPi);
        const UniTem = TemStr.join(", ");
        splitAndTrim(UniTem);
        const allTemDB2 = await Temperaments.findAll();
        return allTemDB2
    } else {
        return allTemDB
    }
    
}

module.exports = {getAllTemperaments}