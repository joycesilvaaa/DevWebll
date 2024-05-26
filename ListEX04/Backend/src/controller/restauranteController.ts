import { Request, Response } from "express";
import RestauranteService from "../service/restauranteService";

class RestauranteController{
    private restauranteService: RestauranteService

    constructor(){
        this.restauranteService = new RestauranteService()
    }

    public async listRestaurante(req: Request, res: Response){
        try{
            const resultado = await this.restauranteService.listRestaurante()
            // verifica
            if(!resultado.success){
                return res.status(400).json({ message: resultado.message })
            } 
            return res.status(201).json(resultado)
        }catch(error){
            console.error(`Erro ao listar restaurantes: ${error}`)
            return res.status(500).json({ message: `Erro interno do servidor` })
        }
    }
}
export default RestauranteController