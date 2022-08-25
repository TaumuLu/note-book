import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { CategoriesEntity } from '../categories/categories.entity'

@Entity('bill')
export class BillEntity {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  time: Date

  @Column('integer')
  type: number

  @Column({ nullable: true })
  category: string

  @Column('float')
  amount: number

  @ManyToOne(type => CategoriesEntity, categories => categories.bills)
  @JoinColumn({ name: 'category' })
  categories: CategoriesEntity
}
