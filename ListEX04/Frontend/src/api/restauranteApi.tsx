import api from "../services/api";

export async function listaRestaurante() {
    try {
        const results = await api.get(`/list/restaurantes`);
        if (!results) {
            console.error(`Erro ao encontrar resultados`);
        }
        return results;
    } catch (error) {
        console.error(`Erro ao listar os clientes: ${error}`);
    }
}