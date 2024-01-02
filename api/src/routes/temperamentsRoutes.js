const {Router} = require("express")

const { addTemperamentHandler } = require("../handler/temperamentsHandler");

const temperamentsRuter = Router();

temperamentsRuter.get("/", addTemperamentHandler);

module.exports = temperamentsRuter