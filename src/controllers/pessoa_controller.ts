import { type Request, type Response } from 'express'
import { AddPessoaService } from '../services/add_pessoa_service'
import { ListarPessoaService } from '../services/listar_pessoa_service'
import { BuscarPessoaService } from '../services/buscar_pessoa_service'
import { UpdatePessoaService } from '../services/update_pessoa_services'

export class PessoaController {
  async salvarPessoa (request: Request, response: Response): Promise<Response> {
    const addPessoaService = new AddPessoaService()
    const { nome, email, cpf } = request.body
    await addPessoaService.add(nome, email, cpf)
    return response.json().status(201)
  }

  async listarPessoa (request: Request, response: Response): Promise<Response> {
    const listarPessoaService = new ListarPessoaService()
    const list = await listarPessoaService.load()
    return response.json(list)
  }

  async buscarPessoaPorId (request: Request, response: Response): Promise<Response> {
    const buscarPessoaService = new BuscarPessoaService()
    const buscar = await buscarPessoaService.findbyId(parseInt(request.params.id))
    return response.json(buscar)
  }

  async atualizarPessoa (request: Request, response: Response): Promise<Response> {
    const atualizarPessoaService = new UpdatePessoaService()
    await atualizarPessoaService
      .update(parseInt(request.params.id), request.body.nome, request.body.email, request.body.cpf)
    return response.json().sendStatus(204)
  }

  async deletarPessoa (request: Request, response: Response): Promise<Response> {
    return response.json()
  }
}
