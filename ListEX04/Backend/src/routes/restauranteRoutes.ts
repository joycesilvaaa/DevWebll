import { Router } from "express";
import RestauranteController from "../controller/restauranteController";

//criando uma instacia do router
const router = Router()
// criando uma instacia do restaurante controller
const restauranteController = new RestauranteController()

router.get('/list/restaurantes', restauranteController.listRestaurante.bind(restauranteController))

export default router