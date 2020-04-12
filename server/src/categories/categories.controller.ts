import { Controller } from '@nestjs/common'
import { Crud, CrudController } from '@nestjsx/crud'

import { CategoriesEntity } from './categories.entity'
import { CategoriesService } from './categories.service'

@Crud({
  model: {
    type: CategoriesEntity,
  },
})
@Controller('categories')
export class CategoriesController implements CrudController<CategoriesEntity> {
  constructor(public service: CategoriesService) {}
}
