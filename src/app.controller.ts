import { Controller, Get, Param, Delete, Put, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Cliente } from './entities/cliente.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

    @Get('/idEmpresa/:id')
    async getClientesByIdEmpresa(@Param('id') id: number) {
        return this.appService.getClientesByIdEmpresa(id);
    }

    @Get('/id/:id')
    async getClienteById(@Param('id') id: number) {
        return this.appService.getClienteById(id);
    }

    @Delete('/id/:id')
    async deleteCliente(@Param('id') id: number) {
      return this.appService.deleteCliente(id);
    }

    @Put('/id/:id')
    async updateCliente(@Param('id') id: number, @Body() cliente: Cliente) {
        cliente.idCliente = id;
        return this.appService.updateCliente(cliente);
    }

    @Post('/id/0')
    async createCliente(@Body() cliente: Cliente) {
        return this.appService.createCliente(cliente);
    }
  
}
