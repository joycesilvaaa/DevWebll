import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Cliente from "./cliente";
import Restaurante from "./restaurante";

@Entity({ name: 'reservas' })
export default class Reservas {
    @PrimaryGeneratedColumn({ type: 'int' })
    res_id: number;
    
    @Column({ type: 'time' })
    res_horario: string;

    @ManyToOne(() => Cliente, cliente => cliente.reservas, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'cli_id' })
    cliente: Cliente;

    @ManyToOne(() => Restaurante, restaurante => restaurante.reservas)
    @JoinColumn({ name: 'rest_id' })
    restaurante: Restaurante;
}
