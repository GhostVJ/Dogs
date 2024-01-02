const {Router} = require("express")

const {getDogsHandler, getDetailHandler, postAddDogHandler} = require("../handler/dogsHandler")

const dogsRuter = Router();

dogsRuter.get("/", getDogsHandler);

dogsRuter.get("/:id", getDetailHandler);

dogsRuter.post("/", postAddDogHandler);

module.exports = dogsRuter