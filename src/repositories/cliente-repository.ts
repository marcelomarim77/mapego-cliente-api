import { EntityRepository, Repository, getConnection } from 'typeorm';

import { Cliente } from '../entities/cliente.entity';

@EntityRepository(Cliente)
export class ClienteRepository extends Repository<Cliente> {
    async findClienteById(id: number) {
        return await this.findOne({ idCliente: id });
    };

    async findClientes(idEmpresaParam: number) {
        return await getConnection()
            .createQueryBuilder()
            .select("cl")
            .from(Cliente, "cl")
            .where("cl.id_empresa = :idEmpresa", { idEmpresa: idEmpresaParam })
            .getMany();
    }

    async deleteCliente(id: number) {
        let cliente = await this.findOne({ idCliente: id });
        return await this.remove(cliente);
    };

    async updateCliente(cliente: Cliente) {
        return await this.update(cliente.idCliente, cliente);
    };
}
