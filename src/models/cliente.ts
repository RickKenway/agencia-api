import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    nomecompleto: string

  @Column({ unique: true })
    email: string

  @Column({ unique: true })
    numero: number

  @Column({ unique: true })
    nomeresponsavel: string
}
