import { type Router } from 'express'
import { ClienteController } from '../controllers/cliente_controller'

const clienteController = new ClienteController()

export default (router: Router): void => {
  router.post('/formulario', clienteController.salvarCliente)
  router.get('/carregar', clienteController.listarCliente)
  router.get('/buscarid/:id', clienteController.buscarClientePorId)
  router.delete('/buscaremail/:email', clienteController.buscarClientePorEmail)
  router.get('/atualizar/:id', clienteController.atualizarCliente)
}
