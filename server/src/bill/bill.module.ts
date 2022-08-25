import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { BillController } from './bill.controller'
import { BillEntity } from './bill.entity'
import { BillService } from './bill.service'

@Module({
  imports: [TypeOrmModule.forFeature([BillEntity])],
  providers: [BillService],
  controllers: [BillController],
})
export class BillModule {}
