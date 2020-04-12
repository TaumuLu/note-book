import React from 'react'
import { CondOperator, QueryFilter } from '@nestjsx/crud-request'
import { Form, DatePicker, Select, Row, Col } from 'antd'
import { IState } from '../types'

import './filter.scss'

interface IProps {
  categories: IState['categories']
  fetchData: (newQuery?: Partial<IState['query']>) => Promise<void>
}

const monthFormat = 'YYYY/MM'

export default ({ categories, fetchData }: IProps) => {
  const [form] = Form.useForm()

  return (
    <Form
      form={form}
      className="filter"
      onValuesChange={(value, store) => {
        const { time, category } = store
        const filter: QueryFilter[] = []
        if (category) {
          filter.push({
            field: 'category',
            operator: CondOperator.EQUALS,
            value: category,
          })
        }
        if (time) {
          filter.push({
            field: 'time',
            operator: CondOperator.BETWEEN,
            value: [
              time.startOf('month').format(),
              time.endOf('month').format(),
            ],
          })
        }
        fetchData({ filter, page: 1 })
      }}
    >
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item name="time" label="月份">
            <DatePicker
              allowClear
              style={{ width: 260 }}
              format={monthFormat}
              picker="month"
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="category" label="分类">
            <Select style={{ width: 260 }} allowClear>
              {categories.map(item => {
                const { id, name } = item
                return (
                  <Select.Option key={id} value={id}>
                    {name}
                  </Select.Option>
                )
              })}
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
