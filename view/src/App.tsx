import React from 'react'
import axios from 'axios'
import { Table, Button, Row, Col, ConfigProvider, Empty } from 'antd'
import { RedoOutlined } from '@ant-design/icons'
import moment from 'moment'
import zhCN from 'antd/es/locale/zh_CN'
import { RequestQueryBuilder, QuerySort } from '@nestjsx/crud-request'
import Form from './components/form'
import Filter from './components/filter'
import { ADD_TITLE, DEFAULT_SOFT } from './utils/constants'
import { IState, IValues } from './types'

import './App.scss'

export default class extends React.PureComponent<{}, IState> {
  columns = [
    {
      title: '账单时间',
      dataIndex: 'time',
      sorter: true,
      render: (value: string) =>
        moment(value)
          .local()
          .format(),
    },
    {
      title: '账单类型',
      dataIndex: 'type',
      render: (value: number) => (value === 0 ? '收入' : '支出'),
    },
    {
      title: '账单分类',
      dataIndex: 'category',
      render: (value: string) => {
        const { categories } = this.state
        return categories.find(item => item.id === value)?.name ?? ''
      },
    },
    {
      sorter: true,
      title: '账单金额',
      dataIndex: 'amount',
      render: (value: number) => {
        return `￥${value.toFixed(2)}`
      },
    },
  ]

  constructor(props: any) {
    super(props)

    this.state = {
      query: {
        page: 1,
        limit: 10,
        filter: [],
        sort: DEFAULT_SOFT,
      },
      total: 0,
      categories: [],
      data: [],
      visible: false,
      loading: false,
      totalAmount: [],
    }

    this.fetchCategories().then(() => this.fetchData())
  }

  get filterTime() {
    const { query } = this.state
    const { filter } = query
    if (Array.isArray(filter)) {
      return filter.find(({ field }) => field === 'time')?.value[1]
    }
    return null
  }

  get formList() {
    const { categories } = this.state

    return [
      {
        type: 'Select',
        name: 'category',
        label: '账单分类',
        options: categories.map(({ id: value, name }) => ({ name, value })),
      },
      {
        type: 'Select',
        name: 'type',
        label: '账单类型',
        disabled: true,
        options: [
          {
            name: '收入',
            value: 0,
          },
          {
            name: '支出',
            value: 1,
          },
        ],
      },
      {
        name: 'amount',
        label: '账单金额',
      },
    ]
  }

  fetchData = (newQuery?: Partial<IState['query']>) => {
    const { query: oldQuery } = this.state
    const query = { ...oldQuery, ...newQuery }
    const params = RequestQueryBuilder.create(query).queryObject

    this.setState({ loading: true })
    return axios
      .get('/bill', { params })
      .then((bill: any) => {
        const { data, total, totalAmount = [] } = bill
        this.setState({ data, query, total, totalAmount })
      })
      .finally(() => {
        this.setState({ loading: false })
      })
  }

  fetchCategories = () => {
    return axios
      .get('/categories')
      .then((categories: any) => this.setState({ categories }))
  }

  renderHeader = () => {
    const { categories } = this.state

    return (
      <div className="header">
        <Row justify="space-between">
          <Col>
            <h2>记账本</h2>
          </Col>
          <Col>
            <span className="refresh" onClick={() => this.fetchData()}>
              <RedoOutlined />
            </span>
            <Button onClick={() => this.setState({ visible: true })}>
              {ADD_TITLE}
            </Button>
          </Col>
        </Row>
        <Filter categories={categories} fetchData={this.fetchData} />
      </div>
    )
  }

  renderFooter = () => {
    const { totalAmount } = this.state
    const [income = 0, pay = 0] = totalAmount

    return (
      <Row justify="end" className="footer">
        <Col className="title">
          <span>{moment(this.filterTime).format('YYYY年MM月')}收支统计</span>
        </Col>
        <Col className="amount">
          <p>
            收入：<span className="income">+￥{income.toFixed(2)}</span>
          </p>
          <p>
            支出：<span className="pay">-￥{pay.toFixed(2)}</span>
          </p>
        </Col>
      </Row>
    )
  }

  toggleVisible = (value?: boolean) => {
    const { visible: oldVisible } = this.state
    const visible = value ?? !oldVisible

    this.setState({ visible })
  }

  onAdd = (values: IValues) => {
    return axios
      .post('/bill', values)
      .then(() => {
        this.fetchData()
        return true
      })
      .catch(() => {
        return false
      })
  }

  render() {
    const { data, query, visible, categories, total, loading } = this.state
    const { page, limit } = query

    return (
      <div className="container">
        <ConfigProvider locale={zhCN}>
          <Table
            locale={{
              emptyText: (
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  description="本月暂无账单，点击右上角添加一笔吧"
                />
              ),
            }}
            loading={loading}
            rowKey="id"
            columns={this.columns as any}
            dataSource={data}
            bordered
            title={this.renderHeader}
            footer={this.filterTime && this.renderFooter}
            pagination={{
              total,
              current: page,
              pageSize: limit,
            }}
            onChange={(pagination, filters, sorter) => {
              let sort: QuerySort[] = DEFAULT_SOFT
              const { order, field } = sorter as any
              if (order) {
                sort = [
                  {
                    field,
                    order: order === 'descend' ? 'DESC' : 'ASC',
                  },
                ]
              }
              this.fetchData({ page: pagination.current, sort })
            }}
          />
          <Form
            visible={visible}
            onClose={this.toggleVisible}
            categories={categories}
            onSubmit={this.onAdd}
            formList={this.formList}
          />
        </ConfigProvider>
      </div>
    )
  }
}
