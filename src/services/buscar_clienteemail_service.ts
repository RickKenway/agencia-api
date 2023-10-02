import { AppDataSource } from '../config/data_source'
import { Cliente } from '../models/cliente'

export class BuscarClienteEmailService {
  async findbyEmail (emailCliente: string): Promise<Cliente> {
    const clienteRepository = AppDataSource.getRepository(Cliente)
    return await clienteRepository.findOneBy({ email: emailCliente })
  }
}
