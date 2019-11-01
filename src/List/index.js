import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter';
import StandardForm from '../StandardForm';

import 'antd/dist/antd.css';

export default class index extends PureComponent {
  static propTypes = {
    filterData: PropTypes.object,
    onChange: PropTypes.func,
    onSearch: PropTypes.func,
    onReset: PropTypes.func,

    dataSource: PropTypes.array,
  };
  render() {
    const { fieldData } = this.props;

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
    return (
      <div>
        <Filter fields={fieldData}></Filter>
      </div>
    );
  }
}
