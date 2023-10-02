import { AppDataSource } from '../config/data_source'
import { Pessoa } from '../models/pessoa'

export class UpdatePessoaService {
  async update (id: number, nome: string, email: string, cpf: string): Promise<void> {
    const pessoaRepository = AppDataSource.getRepository(Pessoa)
    await pessoaRepository.createQueryBuilder()
      .update(Pessoa)
      .set({ nome, email, cpf })
      .where('id = :id', { id })
      .execute()
  }
}
