import React, { PureComponent } from 'react';
import List from '../src/List';

export default class StandardList extends PureComponent {
  render() {
    const fieldData = [
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
    ];
    return <List fieldData={fieldData}></List>;
  }
}
