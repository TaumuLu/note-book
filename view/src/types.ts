import { CreateQueryParams } from '@nestjsx/crud-request'

export interface IState {
  query: CreateQueryParams
  categories: {
    id: string
    name: string
    type: number
  }[]
  data: {
    id: number
    time: string
    type: number
    category: string
    amount: number
  }[]
  total: number
  visible: boolean
  loading: boolean
  totalAmount: number[]
}

export interface IValues {
  type: number
  category?: string
  amount: number
}
