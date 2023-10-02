import { AppDataSource } from '../config/data_source'
import { Cliente } from '../models/cliente'

export class UpdateClienteService {
  async update (id: number, nomecompleto: string, email: string, numero: number, nomeresponsavel: string): Promise<void> {
    const clienteRepository = AppDataSource.getRepository(Cliente)
    await clienteRepository.createQueryBuilder()
      .update(Cliente)
      .set({ nomecompleto, email, numero, nomeresponsavel })
      .where('id = :id', { id })
      .execute()
  }
}
