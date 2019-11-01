import React, { PureComponent } from 'react';
import { Button } from 'antd';

import StandardForm from '../src';

export default class StandardFormExample extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.formRef = React.createRef();
  }

  data = {
    name: '',
    size: 1,
    city: 0,
    area: '郊区',
    password: '',
    choosen: true,
    confirm: true,
    rate: 3,
    describe: '',
    fruit: ['apple', 'banana'],
  };

  fieldData = [
    {
      name: 'custom',
      type: 'custom',
      label: 'Plain Text',
      node: <div>Plain</div>,
    },
    {
      name: 'name',
      label: '名称',
      type: 'input',
      placeholder: '请输入名称',
      rules: [
        {
          required: true,
          message: '请输入名称',
        },
      ],
    },
    {
      name: 'size',
      label: '大小',
      type: 'inputNumber',
      placeholder: '请输入大小',
      rules: [
        {
          required: true,
          message: '请输入名称',
        },
      ],
    },
    {
      name: 'city',
      label: '城市',
      type: 'select',
      options: [
        {
          label: '北京',
          value: 0,
        },
        {
          label: '上海',
          value: 1,
        },
        {
          label: '杭州',
          value: 2,
        },
        {
          label: '深圳',
          value: 3,
        },
      ],
      rules: [
        {
          required: true,
          message: '请输入名称',
        },
      ],
    },
    {
      name: 'fruit',
      label: '水果',
      mode: 'multiple',
      type: 'select',
      rules: [
        {
          required: true,
          message: '请选择水果',
        },
      ],
      options: [
        {
          label: '苹果',
          value: 'applue',
        },
        {
          label: '香蕉',
          value: 'banana',
        },
      ],
    },
    {
      name: 'slider',
      type: 'slider',
      label: 'Slider',
      marks: {
        0: 'A',
        20: 'B',
        40: 'C',
        60: 'D',
        80: 'E',
        100: 'F',
      },
    },
    {
      name: 'area',
      label: '地区',
      type: 'radio',
      options: ['城区', '郊区'],
    },
    {
      name: 'confirm',
      label: '确认选择',
      type: 'checkbox',
      rules: [
        {
          required: true,
          message: '请确认选择',
        },
      ],
    },
    {
      name: 'checkboxGroup',
      label: '确认选择',
      type: 'checkboxGroup',
      options: ['是', '否'],
      onChange: e => console.log('e', e),
      rules: [
        {
          required: true,
          message: '请确认选择',
        },
      ],
    },
    {
      name: 'custom',
      label: '自定义项',
      type: 'custom',
      node: (
        <div>
          <h2>自定义表单项</h2>
        </div>
      ),
    },
    {
      name: 'password',
      label: '密码',
      type: 'password',
      rules: [
        {
          required: true,
          message: '请输入密码',
        },
      ],
    },
    {
      name: 'choosen',
      label: '是否选择',
      type: 'switch',
      checkedChildren: '开',
      unCheckedChildren: '关',
      rules: [
        {
          required: true,
          message: '请输入密码',
        },
      ],
    },
    {
      name: 'rate',
      label: '评分',
      type: 'rate',
    },
    {
      name: 'describe',
      label: '描述',
      type: 'textarea',
      placeholder: '请输入描述',
    },
  ];

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.formRef);
    this.formRef.current.validateFields((errors, values) => {
      console.log(values);
    });
  };

  handleChange = value => {
    console.log('value: ', value);
  };

  render() {
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 12 },
    };
    return (
      <StandardForm
        formItemLayout={formItemLayout}
        ref={this.formRef}
        data={this.data}
        fields={this.fieldData}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      >
        <div style={{ textAlign: 'center' }}>
          <Button htmlType="submit">Submit</Button>
        </div>
      </StandardForm>
    );
  }
}
