import { Body, Controller, Get, Post } from '@nestjs/common'; 
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';
import { CrearUsuario } from './dto/create-usuarios.dto';

// Controlador de usuarios
@Controller('usuarios')
export class UsuariosController {

    constructor( private usuarioServicio : UsuariosService){}

    // Api para obtener todos los usuarios
    @Get()
    getAllUser() : Promise<Usuario[]>{
        return this.usuarioServicio.getAllUsers()
    }

    // Api para crear un usuario
    @Post()
    createUser( @Body() newUser : CrearUsuario){
        return this.usuarioServicio.createUser(newUser)
    }

}
