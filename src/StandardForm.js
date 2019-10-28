import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import FormField from './FormField';

class FormComponent extends Component {
  static propTypes = {
    layout: PropTypes.string,
    formItemLayout: PropTypes.object,
    data: PropTypes.object.isRequired,
    fields: PropTypes.array.isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange() {},
    onSubmit() {},
  };

  render() {
    const { layout, formItemLayout, data, fields, form, onChange, children, onSubmit } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form layout={layout} {...formItemLayout} onSubmit={onSubmit}>
        {fields.map((item, index) => {
          return (
            <FormField
              key={index}
              data={data}
              fieldProps={item}
              getFieldDecorator={getFieldDecorator}
              onChange={onChange}
            />
          );
        })}
        {children}
      </Form>
    );
  }
}

const options = {
  onValuesChange(props, changedFields) {
    props.onChange(changedFields);
  },
};

export default Form.create(options)(FormComponent);
