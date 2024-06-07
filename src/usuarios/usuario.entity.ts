import { Entity, Column, PrimaryGeneratedColumn } from "typeorm" // Modulos para entidades de la tabla

// Entidad de la tabla usuarios
@Entity({name: 'usuarios'})
export class Usuario{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    tiempo: string;
}