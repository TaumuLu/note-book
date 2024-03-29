import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { CategoriesController } from './categories.controller'
import { CategoriesEntity } from './categories.entity'
import { CategoriesService } from './categories.service'

@Module({
  imports: [TypeOrmModule.forFeature([CategoriesEntity])],
  providers: [CategoriesService],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
