import { AppDataSource } from '../config/data_source'
import { Cliente } from '../models/cliente'

export class BuscarClienteIdService {
  async findbyId (idCliente: number): Promise<Cliente> {
    const clienteRepository = AppDataSource.getRepository(Cliente)
    return await clienteRepository.findOneBy({ id: idCliente })
  }
}
