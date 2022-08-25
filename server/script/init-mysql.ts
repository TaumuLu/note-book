import { readFileSync } from 'fs'
import { join } from 'path'
import { createConnection } from 'typeorm'

import { BillEntity } from '../src/bill/bill.entity'
import { CategoriesEntity } from '../src/categories/categories.entity'

import ormconfig = require('../ormconfig.js')

const getEntityList = (path: string, Entity: any) => {
  const data = readFileSync(path, {
    encoding: 'utf-8',
  })
  const [fieldStr, ...values] = data.split('\n')
  const fields = fieldStr.split(',')
  return values.reduce((p, c) => {
    if (!c) return p
    return p.concat(
      c.split(',').reduce((e, value, i) => {
        const key = fields[i]
        if (key === 'time') {
          e[key] = new Date(+value)
        } else {
          e[key] = value
        }
        return e
      }, new Entity()),
    )
  }, [])
}
const categoriesData = getEntityList(
  join(__dirname, '../data/categories.csv'),
  CategoriesEntity,
)
const billData = getEntityList(join(__dirname, '../data/bill.csv'), BillEntity)

createConnection({
  ...(ormconfig as any),
  entities: ['src/**/*.entity.{ts,js}'],
})
  .then(async connection => {
    await connection.dropDatabase()
    await connection.synchronize()
    await connection.manager.insert(CategoriesEntity, categoriesData)
    await connection.manager.insert(BillEntity, billData)
    connection.close()
  })
  .catch(error => console.log(error))
