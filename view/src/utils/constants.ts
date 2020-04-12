import { QuerySort } from '@nestjsx/crud-request'

export const ADD_TITLE = '添加账单'
export const DEFAULT_SOFT: QuerySort[] = [{ field: 'time', order: 'DESC' }]
