import * as React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, InputNumber, Select, Radio, Checkbox, Switch, Rate, Slider } from 'antd';

const defaultSelectProps = {
  allowClear: true,
  showSearch: true,
  placeholder: '请选择',
  optionFilterProp: 'children',
  filterOption: (input, option) =>
    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
};

class Field extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    fieldProps: PropTypes.object.isRequired,
    getFieldDecorator: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  // Input
  renderInput = restFieldProps => {
    return <Input {...restFieldProps} />;
  };

  // InputNumber
  renderInputNumber = restFieldProps => {
    return <InputNumber {...restFieldProps} />;
  };

  // Textarea
  renderTextArea = restFieldProps => {
    return <Input.TextArea {...restFieldProps} />;
  };

  // Select
  renderSelect = restFieldProps => {
    const { options = [], ...restSelectProps } = restFieldProps;
    return (
      <Select {...defaultSelectProps} {...restSelectProps}>
        {options.map(item => (
          <Select.Option key={item.value} value={item.value}>
            {item.label}
          </Select.Option>
        ))}
      </Select>
    );
  };

  // Radio
  renderRadio = restFieldProps => {
    return <Radio.Group {...restFieldProps}></Radio.Group>;
  };

  // Checkbox
  renderCheckbox = restFieldProps => {
    return <Checkbox {...restFieldProps} />;
  };

  // CheckBox Group
  renderCheckboxGroup = restFieldProps => {
    return <Checkbox.Group {...restFieldProps} />;
  };

  // Password
  renderPassword = restFieldProps => {
    return <Input.Password {...restFieldProps} />;
  };

  // Switch
  renderSwitch = restFieldProps => {
    return <Switch {...restFieldProps}></Switch>;
  };

  // Rate
  renderRate = restFieldProps => {
    return <Rate {...restFieldProps}></Rate>;
  };

  // Slider
  renderSlider = restFieldProps => {
    return <Slider {...restFieldProps}></Slider>;
  };

  // 自定义表单项
  renderCustom = restFieldProps => {
    const { node } = restFieldProps;
    return <React.Fragment>{node}</React.Fragment>;
  };

  // 渲染表单项
  renderField = fieldProps => {
    const { type, ...restFieldProps } = fieldProps;
    switch (type) {
      case 'input':
        return this.renderInput(restFieldProps);
      case 'inputNumber':
        return this.renderInputNumber(restFieldProps);
      case 'textarea':
        return this.renderTextArea(restFieldProps);
      case 'select':
        return this.renderSelect(restFieldProps);
      case 'radio':
        return this.renderRadio(restFieldProps);
      case 'checkbox':
        return this.renderCheckbox(restFieldProps);
      case 'checkboxGroup':
        return this.renderCheckboxGroup(restFieldProps);
      case 'password':
        return this.renderPassword(restFieldProps);
      case 'switch':
        return this.renderSwitch(restFieldProps);
      case 'rate':
        return this.renderRate(restFieldProps);
      case 'slider':
        return this.renderSlider(restFieldProps);
      case 'custom':
        return this.renderCustom(restFieldProps);
      default:
        return null;
    }
  };

  getValuePropName(type) {
    switch (type) {
      case 'switch':
      case 'checkbox':
      case 'checkboxGroup':
        return 'checked';
      default:
        return 'value';
    }
  }

  render() {
    const { data, fieldProps, getFieldDecorator } = this.props;
    const {
      label,
      name,
      type,
      rules = [],
      decoratorOptions = {},
      formItemOptions = {},
      ...restFieldProps
    } = fieldProps;

    const decoratorProps = {
      initialValue: data[name],
      rules: rules,
      valuePropName: this.getValuePropName(type),
      ...decoratorOptions,
    };

    return (
      <Form.Item label={label} {...formItemOptions}>
        {getFieldDecorator(name, decoratorProps)(
          this.renderField({
            type,
            ...restFieldProps,
          }),
        )}
      </Form.Item>
    );
  }
}

export default Field;
