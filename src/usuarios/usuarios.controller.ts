import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';
import { CrearUsuario } from './dto/create-usuarios.dto';

@Controller('usuarios')
export class UsuariosController {

    constructor( private usuarioServicio : UsuariosService){}

    @Get()
    getAllUser() : Promise<Usuario[]>{
        return this.usuarioServicio.getAllUsers()
    }

    @Post()
    createUser( @Body() newUser : CrearUsuario){
        return this.usuarioServicio.createUser(newUser)
    }

}
