const { Router } = require('express');
// Importar todos los routers;
const dogsRuter = require("./dogsRoutes");
const temperamentsRuter = require("./temperamentsRoutes");


const router = Router();

// Configurar los routers
router.use("/dogs",dogsRuter);

router.use("/temperaments",temperamentsRuter);


module.exports = router;
