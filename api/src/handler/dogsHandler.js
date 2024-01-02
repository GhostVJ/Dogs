const { createDogsDB, getDogById, getAllDogs, getDogByName } = require("../controllers/dogsControllers");

const getDogsHandler = async(req, res) =>{
    const{name} = req.query;
    try {
        if (name) {
            const dogByName = await getDogByName(name);
            res.status(200).json(dogByName);
        } else {
            const response = await getAllDogs();
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
};

const getDetailHandler = async(req,res)=>{
    const {id} = req.params;
    const fuente = isNaN(id) ? "db" : "api";
    try {
        const response = await getDogById(id, fuente);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
};

const postAddDogHandler = async(req,res)=>{
    const {image, name, height, weight, lifespan} = req.body;

    try {
        const response = await createDogsDB(image, name, height, weight, lifespan);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
};


module.exports = {
    getDogsHandler,
    getDetailHandler,
    postAddDogHandler,
}