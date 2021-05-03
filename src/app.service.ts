import { Injectable } from '@nestjs/common';

import { ClienteRepository } from './repositories/cliente-repository';

@Injectable()
export class AppService {

    constructor(private readonly clienteRepository: ClienteRepository) {}

    async getClientes(id: number) {
        const result = await this.clienteRepository.findClientes(id);
        return result;
    };

    async getClienteById(id: number) {
        const result = await this.clienteRepository.findClienteById(id);
        return result;
    };
}
