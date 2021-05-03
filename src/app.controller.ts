import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/idEmpresa/:id')
  async getClientes(@Param('id') id: number) {
      return this.appService.getClientes(id);
  }

  @Get('/id/:id')
    async getClienteById(@Param('id') id: number) {
        return this.appService.getClienteById(id);
    }

}
