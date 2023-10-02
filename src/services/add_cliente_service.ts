import { AppDataSource } from '../config/data_source'
import { Cliente } from '../models/cliente'

export class AddClienteService {
  async add (nomecompleto: string, email: string, numero: number, nomeresponsavel: string): Promise<void> {
    const clienteRepository = AppDataSource.getRepository(Cliente)
    await clienteRepository.save({ nomecompleto, email, numero, nomeresponsavel })
  }
}
