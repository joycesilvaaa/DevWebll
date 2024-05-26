import { Connection } from "../database/data-source";
import Restaurante from "../entity/restaurante";
import { ICreateRestaurante } from "../Interface/IRestaurante";

class RestauranteService{
    private restauranteRepository = Connection.getRepository(Restaurante)

    public async createRestaurante(formData: ICreateRestaurante) {
        try {
            // Busca restaurante existente 
            const restaurante = await this.restauranteRepository.findOne({
                where: { 
                    rest_nome: formData.rest_nome, 
                    rest_localizacao: formData.rest_localizacao, 
                    rest_tipoCozinha: formData.rest_tipoCozinha 
                }
            });

            // Verifica se foi encontrado
            if (restaurante) {
                return { success: false, message: `Restaurante já cadastrado!` };
            }

            // Cria o novo restaurante
            const novoRestaurante = this.restauranteRepository.create(formData);

            // Salva o novo restaurante
            await this.restauranteRepository.save(novoRestaurante);

            return { success: true, message: `Cadastro realizado com sucesso!` };
        } catch (error) {
            console.error(`Erro ao cadastrar restaurante: ${error}`);
            return { success: false, message: `Erro ao cadastrar restaurante` };
        }
    }

    public async listRestaurante(){
        try{
            const restaurantes = await this.restauranteRepository.find()
            if(!restaurantes || restaurantes.length === 0){
                return { success: false, message: `Nenhum resturante cadastrado!`}
            }
            return { success: true, message: `Restaurantes encontrados`, restaurantes}
        }catch(error){
            console.error(`Erro em listar todos os restaurantes: ${error}`)
        }
    }
}

export default RestauranteService