import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { Repository } from 'typeorm';
import { CrearUsuario } from './dto/create-usuarios.dto';

// Servicios para crear usuarios
@Injectable()
export class UsuariosService {

    constructor( @InjectRepository(Usuario) private usuarioRepository : Repository<Usuario>){}

    // Servicico para obtener un usuarios
    getAllUsers(){
        return this.usuarioRepository.find()
    }

    // Servicio para crear un usuario
    async createUser(user : CrearUsuario){

        const newUser = this.usuarioRepository.create(user)

        return await this.usuarioRepository.save(newUser)
    }

}
