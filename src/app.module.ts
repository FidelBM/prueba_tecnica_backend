import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // Conexión a la base de datow
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'monorail.proxy.rlwy.net',
      port: 16527,
      username: 'postgres',
      password: 'IEXsyrNOEqOjbTxUUkhtLCyrnJtfowmF',
      database: 'railway',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
