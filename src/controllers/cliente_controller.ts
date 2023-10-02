import { type Request, type Response } from 'express'
import { AddClienteService } from '../services/add_cliente_service'
import { ListarClienteService } from '../services/listar_cliente_service'
import { BuscarClienteIdService } from '../services/buscar_clienteid_service'
import { BuscarClienteEmailService } from '../services/buscar_clienteemail_service'
import { UpdateClienteService } from '../services/update_cliente_services'

export class ClienteController {
  async salvarCliente (request: Request, response: Response): Promise<Response> {
    const addClienteService = new AddClienteService()
    const { nomecompleto, email, numero, nomeresponsavel } = request.body
    await addClienteService.add(nomecompleto, email, numero, nomeresponsavel)
    return response.json().status(201)
  }

  async listarCliente (request: Request, response: Response): Promise<Response> {
    const listarClienteService = new ListarClienteService()
    const list = await listarClienteService.load()
    return response.json(list)
  }

  async buscarClientePorId (request: Request, response: Response): Promise<Response> {
    const buscarClienteIdService = new BuscarClienteIdService()
    const buscarid = await buscarClienteIdService.findbyId(parseInt(request.params.id))
    return response.json(buscarid)
  }

  async buscarClientePorEmail (request: Request, response: Response): Promise<Response> {
    const buscarClienteEmailService = new BuscarClienteEmailService()
    const buscaremail = await buscarClienteEmailService.findbyEmail(request.params.email)
    return response.json(buscaremail)
  }

  async atualizarCliente (request: Request, response: Response): Promise<Response> {
    const atualizarClienteService = new UpdateClienteService()
    await atualizarClienteService
      .update(parseInt(request.params.id), request.body.nomecompleto, request.body.email, request.body.numero, request.body.nomeresponsavel)
    return response.json().sendStatus(204)
  }
}
