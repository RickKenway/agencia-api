import { AppDataSource } from '../config/data_source'
import { Cliente } from '../models/cliente'

export class ListarClienteService {
  async load (): Promise<Cliente[]> {
    const clienteRepository = AppDataSource.getRepository(Cliente)
    const list = await clienteRepository.find({})
    return list
  }
}
