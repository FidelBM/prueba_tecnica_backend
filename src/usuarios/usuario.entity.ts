import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"

@Entity({name: 'usuarios'})
export class Usuario{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    tiempo: string;
}