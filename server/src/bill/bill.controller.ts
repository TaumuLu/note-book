import { Controller } from '@nestjs/common'
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedRequest,
} from '@nestjsx/crud'

import { BillEntity } from './bill.entity'
import { BillService } from './bill.service'

@Crud({
  model: {
    type: BillEntity,
  },
})
@Controller('bill')
export class BillController implements CrudController<BillEntity> {
  constructor(public service: BillService) {}

  get base(): CrudController<BillEntity> {
    return this
  }

  @Override()
  getMany(@ParsedRequest() req: CrudRequest) {
    const { filter, limit, page } = req.parsed
    const isFilterTime = filter.some(({ field }) => field === 'time')
    if (isFilterTime) {
      delete req.parsed.limit
      delete req.parsed.page
    }
    const value = this.base.getManyBase(req).then(values => {
      if (Array.isArray(values)) {
        if (isFilterTime) {
          const total = values.length
          const start = (page - 1) * limit
          const end = page * limit
          const data = values.slice(start, end)
          const totalAmount = this.service.calcTotalAmount(values)

          return {
            data,
            count: limit,
            page,
            total,
            pageCount: Math.round(total / limit),
            totalAmount,
          }
        }
      }
      const data = Array.isArray(values) ? values : values.data
      return {
        ...values,
        totalAmount: this.service.calcTotalAmount(data),
      }
    })
    return value
  }
}
