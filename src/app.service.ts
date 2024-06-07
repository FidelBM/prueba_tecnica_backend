import { Injectable } from '@nestjs/common';


// Probar que la aplicacion corre correctamente
@Injectable()
export class AppService {
  getHello(): string {
    return 'Pueba Tecnica';
  }
}
