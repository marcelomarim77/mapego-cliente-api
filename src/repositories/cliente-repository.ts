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

    async createCliente(cliente: Cliente) {
        return await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Cliente)
                .values([
                    { idEmpresa: 1,
                      pessoa: cliente.pessoa,
                      cpfCnpj: cliente.cpfCnpj,
                      rgIe: cliente.rgIe,
                      razaoSocial: cliente.razaoSocial,
                      nomeFantasia: cliente.nomeFantasia,
                      apelido: cliente.apelido,
                      cep: cliente.cep,
                      endereco: cliente.endereco,
                      numero: cliente.numero,
                      complemento: cliente.complemento,
                      bairro: cliente.bairro,
                      cidade: cliente.cidade,
                      uf: cliente.uf,
                      ibge: cliente.ibge,
                      contato: cliente.contato,
                      telefone: cliente.telefone,
                      celular: cliente.celular,
                      email: cliente.email,
                      dadosAdicionais: cliente.dadosAdicionais
                     }
                ])
                .execute();
    };
}
