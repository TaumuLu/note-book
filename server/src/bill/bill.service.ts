import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'

import { BillEntity } from './bill.entity'

@Injectable()
export class BillService extends TypeOrmCrudService<BillEntity> {
  constructor(@InjectRepository(BillEntity) repo) {
    super(repo)
  }

  calcTotalAmount(data: BillEntity[]) {
    return data.reduce(
      (p, c) => {
        const { type, amount } = c
        let [income, pay] = p
        if (type === 0) {
          income += +amount
        } else {
          pay += +amount
        }
        return [income, pay]
      },
      [0, 0],
    )
  }
}
