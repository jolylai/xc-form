import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col, Button, Icon } from 'antd';
import Field from '../Field';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

@Form.create()
export default class Filter extends PureComponent {
  static propTypes = {
    fields: PropTypes.array,
    onSearch: PropTypes.func,
    onReset: PropTypes.func,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onSearch() {},
    onReset() {},
    onChange() {},
  };

  state = {
    expandForm: false,
  };

  getActionsOffset = fields => {
    return Math.abs((fields.length % 3) - 2) * 8;
  };

  toggleForm = () => {
    const { expandForm } = this.state;
    this.setState({
      expandForm: !expandForm,
    });
  };

  handleSearch = e => {
    e.preventDefault();
    const { form, onSearch } = this.props;
    const values = form.getFieldsValue();
    onSearch(values);
  };

  handleReset = () => {
    const {
      onReset,
      form: { resetFields },
    } = this.props;

    resetFields();
    onReset();
  };

  renderFields = fields => {
    const {
      form: { getFieldDecorator },
    } = this.props;

    return fields.map(field => {
      const { label, name, ...restField } = field;
      return (
        <Col key={name} md={8} sm={24}>
          <Form.Item label={label}>
            {getFieldDecorator(name)(<Field {...restField}></Field>)}
          </Form.Item>
        </Col>
      );
    });
  };

  render() {
    const { expandForm } = this.state;
    const { fields } = this.props;

    const actionsLayout = {
      md: {
        span: 8,
        offset: this.getActionsOffset(fields),
      },
      sm: { span: 24 },
    };

    const fieldsProps = expandForm ? fields : fields.slice(0, 5);

    return (
      <Form {...formItemLayout} onSubmit={this.handleSearch}>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          {this.renderFields(fieldsProps)}
          <Col {...actionsLayout}>
            <Form.Item label=" " colon={false}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                重置
              </Button>
              <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                展开 <Icon type={expandForm ? 'up' : 'down'} />
              </a>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}
