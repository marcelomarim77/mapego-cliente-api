import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({
    name: 'cliente'
})
export class Cliente {

    @Column({
        name: 'id_empresa',
        type: 'int',
    })
    idEmpresa: number;

    @Column({
        primary: true,
        generated: 'increment',
        name: 'id_cliente',
        type: 'int',
    })
    idCliente: number;

    @Column({
        name: 'tipo_pessoa',
        type: 'char',
        length: 1,
    })
    pessoa: string;

    @Column({
        name: 'cpf_cnpj',
        type: 'char',
        length: 14,
    })
    cpfCnpj: string;

    @Column({
        name: 'rg_ie',
        type: 'char',
        length: 14,
    })
    rgIe: string;

    @Column({
        name: 'razao_social',
        type: 'char',
        length: 60,
    })
    razaoSocial: string;

    @Column({
        name: 'nome_fantasia',
        type: 'char',
        length: 60,
    })
    nomeFantasia: string;

    @Column({
        name: 'apelido',
        type: 'char',
        length: 60,
    })
    apelido: string;

    @Column({
        name: 'cep',
        type: 'char',
        length: 8,
    })
    cep: string;

    @Column({
        name: 'endereco',
        type: 'char',
        length: 60,
    })
    endereco: string;

    @Column({
        name: 'numero',
        type: 'char',
        length: 10,
    })
    numero: string;

    @Column({
        name: 'complemento',
        type: 'char',
        length: 60,
    })
    complemento: string;

    @Column({
        name: 'bairro',
        type: 'char',
        length: 60,
    })
    bairro: string;

    @Column({
        name: 'cidade',
        type: 'char',
        length: 60,
    })
    cidade: string;

    @Column({
        name: 'uf',
        type: 'char',
        length: 2,
    })
    uf: string;

    @Column({
        name: 'ibge',
        type: 'char',
        length: 7,
    })
    ibge: string;

    @Column({
        name: 'contato',
        type: 'char',
        length: 60,
    })
    contato: string;

    @Column({
        name: 'telefone',
        type: 'char',
        length: 20,
    })
    telefone: string;

    @Column({
        name: 'celular',
        type: 'char',
        length: 20,
    })
    celular: string;

    @Column({
        name: 'email',
        type: 'char',
        length: 60,
    })
    email: string;

    @Column({
        name: 'dados_adicionais',
        type: 'char',
        length: 255,
    })
    dadosAdicionais: string;

}
