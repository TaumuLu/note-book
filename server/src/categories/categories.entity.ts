import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { BillEntity } from '../bill/bill.entity'

@Entity('categories')
export class CategoriesEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string

  @Column()
  name: string

  @Column('integer')
  type: number

  @OneToMany(
    type => BillEntity,
    bill => bill.category
  )
  bills: BillEntity[]
}
