import { AppDataSource } from './config/data_source'

AppDataSource.initialize().then(
  async () => {
    const app = (await import('./config/app')).default
    app.listen(3000, () => { console.log('Running port 3000') })
  }
).catch((error) => { console.log(error) })
