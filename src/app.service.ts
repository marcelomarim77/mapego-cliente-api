import { Injectable } from '@nestjs/common';

import { ClienteRepository } from './repositories/cliente-repository';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class AppService {

    constructor(private readonly clienteRepository: ClienteRepository) {}

    async getClientesByIdEmpresa(idEmpresa: number) {
        const result = await this.clienteRepository.findClientesByIdEmpresa(idEmpresa);
        return result;
    };

    async getClienteById(id: number) {
        const result = await this.clienteRepository.findClienteById(id);
        return result;
    };

    async deleteCliente(id: number) {
        const result = await this.clienteRepository.deleteCliente(id);
        return result;
    };

    async updateCliente(cliente: Cliente) {
        const result = await this.clienteRepository.updateCliente(cliente);
        return result;
    };

    async createCliente(cliente: Cliente) {
        const result = await this.clienteRepository.createCliente(cliente);
        return result;
    };
}
