import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Reservas from "./reservas";

@Entity({name: 'restaurante'})
export default class Restaurante{
    @PrimaryGeneratedColumn({type:'int'})
    rest_id: number

    @Column({type: "varchar", length:100, nullable: false})
    rest_nome: string

    @Column({type:"varchar", length:250, nullable: false})
    rest_localizacao: string

    @Column({type: "varchar", length:250, nullable: false})
    rest_tipoCozinha: string

    @OneToMany(()=> Reservas,reservas =>reservas.restaurante)
    reservas: Reservas[]
}