import React, { useMemo, useState } from 'react'
import { Form, Select, Modal, Input, message, Button } from 'antd'

import { IState, IValues } from '../types'
import { ADD_TITLE } from '../utils/constants'
import './form.scss'

interface IProps {
  data?: IState['data']
  visible: boolean
  onClose: (value?: boolean) => void
  onSubmit: (values: IValues) => Promise<boolean>
  categories: IState['categories']
  formList: {
    type?: string
    name: string
    label: string
    disabled?: boolean
    options?: {
      name: string
      value: any
    }[]
  }[]
}

export default ({
  data,
  categories,
  visible,
  onClose,
  onSubmit,
  formList,
}: IProps) => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  useMemo(() => visible && form.resetFields(), [visible, form])

  return (
    <Modal
      visible={visible}
      title={ADD_TITLE}
      onCancel={() => onClose()}
      footer={[
        <Button key="back" onClick={() => onClose()}>
          取消
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={() => {
            form.validateFields().then(values => {
              setLoading(true)
              onSubmit(values as IValues).then(success => {
                if (success) {
                  message.success('添加成功')
                } else {
                  message.success('添加失败')
                }
                setLoading(false)
                onClose()
              })
            })
          }}
        >
          确定
        </Button>,
      ]}
    >
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        form={form}
        initialValues={data}
        onValuesChange={value => {
          const { category } = value
          if (category) {
            const item = categories.find(val => val.id === category)
            form.setFieldsValue({ type: item?.type })
          }
        }}
      >
        {formList.map(item => {
          const { type, name, label } = item
          let component
          if (type === 'Select') {
            const { disabled, options = [] } = item
            component = (
              <Select disabled={disabled}>
                {(options as any).map((option: any) => {
                  return (
                    <Select.Option key={option.name} value={option.value}>
                      {option.name}
                    </Select.Option>
                  )
                })}
              </Select>
            )
          } else {
            component = <Input />
          }
          const rules = [{ required: true, message: '不能为空' }]
          return (
            <Form.Item key={name} name={name} label={label} rules={rules}>
              {component}
            </Form.Item>
          )
        })}
      </Form>
    </Modal>
  )
}
