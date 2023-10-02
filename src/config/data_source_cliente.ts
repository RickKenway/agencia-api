import { DataSource } from 'typeorm'
import { Cliente } from '../models/cliente'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './src/agenciadb.sqlite',
  synchronize: true,
  entities: [Cliente],
  subscribers: [],
  migrations: []
})
