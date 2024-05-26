import 'reflect-metadata' //permirte trabalhar com a ideia de anotexoes
import express from'express'
import cors from 'cors'
import { Connection } from './database/data-source'
import ReservaRouter from './routes/reservasRoutes'
import RestauranteRouter from './routes/restauranteRoutes'
import ClienteRouter from './routes/clienteRoutes'
import RestauranteService from './service/restauranteService'
import { ICreateRestaurante } from './Interface/IRestaurante'

//Inicializa
const app = express() 

//Incializa o cors para não dar bloqueio nas requesições
app.use(cors())
//Colocamos que vamos usar o padrão de dados em tipo json
app.use(express.json())
//Define as rotas que vão ser usadas
app.use(ReservaRouter)
app.use(RestauranteRouter)
app.use(ClienteRouter)

//Função para inicializar o banco de dados e o projeto
async function inicializaProjeto() {
    try {
        // Inicializa a conexão com o banco de dados
        await Connection.initialize()
        console.log('Banco de dados conectado com sucesso!')

        adicionarRestaurantes()
        // Inicializa o projeto depois que conecta com o banco 
        const porta = 5000
        app.listen(porta, ()=>{
            console.log(`Servidor rodando na porta ${porta}`)
        })
    }catch(error){
        console.error(`Erro o inicializar banco : ${error}`)
    }
}

// Chama a função 
inicializaProjeto()

async function adicionarRestaurantes() {
    const restauranteService = new RestauranteService();

    const restaurantes: ICreateRestaurante[] = [
        { rest_nome: "Restaurante Sabor do Brasil", rest_localizacao: "Rua das Flores, 123, São Paulo, SP", rest_tipoCozinha: "Brasileira" },
        { rest_nome: "Pizzaria Bella Napoli", rest_localizacao: "Avenida Itália, 456, Rio de Janeiro, RJ", rest_tipoCozinha: "Italiana" },
        { rest_nome: "Sushi Yama", rest_localizacao: "Praça Japão, 789, Curitiba, PR", rest_tipoCozinha: "Japonesa" },
        { rest_nome: "Churrascaria Fogo de Chão", rest_localizacao: "Rodovia dos Bandeirantes, km 25, Campinas, SP", rest_tipoCozinha: "Churrasco" },
        { rest_nome: "La Boulangerie", rest_localizacao: "Rua dos Pães, 101, Porto Alegre, RS", rest_tipoCozinha: "Francesa" },
        { rest_nome: "Cantina do Zé", rest_localizacao: "Travessa dos Vinhos, 202, Belo Horizonte, MG", rest_tipoCozinha: "Portuguesa" },
        { rest_nome: "El Mexicano", rest_localizacao: "Avenida América, 303, Salvador, BA", rest_tipoCozinha: "Mexicana" },
        { rest_nome: "Taj Mahal", rest_localizacao: "Rua da Índia, 404, Brasília, DF", rest_tipoCozinha: "Indiana" },
        { rest_nome: "Bistrô Gourmet", rest_localizacao: "Avenida Central, 505, Florianópolis, SC", rest_tipoCozinha: "Contemporânea" },
        { rest_nome: "Hamburgueria Big Boss", rest_localizacao: "Rua dos Burgers, 606, Fortaleza, CE", rest_tipoCozinha: "Americana" },
        { rest_nome: "Café Paris", rest_localizacao: "Avenida das Rosas, 707, Manaus, AM", rest_tipoCozinha: "Francesa" },
        { rest_nome: "Tandoor House", rest_localizacao: "Rua da Índia, 101, Mumbai, MH", rest_tipoCozinha: "Indiana" },
    ];

    for (const restaurante of restaurantes) {
        const result = await restauranteService.createRestaurante(restaurante);
        console.log(result.message);
    }
}


