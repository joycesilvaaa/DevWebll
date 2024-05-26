import "reflect-metadata"
import { DataSource } from "typeorm"
import Cliente from "../entity/cliente"
import Reservas from "../entity/reservas"
import Restaurante from "../entity/restaurante"

export const Connection = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "fatec",
    database: "LISTX04",
    synchronize: false,
    logging: false,
    entities: [Cliente, Restaurante, Reservas],
});