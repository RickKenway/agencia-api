import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './src/agenciadb.sqlite',
  synchronize: true,
  entities: [],
  subscribers: [],
  migrations: []
})
