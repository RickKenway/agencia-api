import { AppDataSource } from '../config/data_source'
import { Pessoa } from '../models/pessoa'

export class BuscarPessoaService {
  async findbyId (idPessoa: number): Promise<Pessoa> {
    const pessoaRepository = AppDataSource.getRepository(Pessoa)
    return await pessoaRepository.findOneBy({ id: idPessoa })
  }
}
