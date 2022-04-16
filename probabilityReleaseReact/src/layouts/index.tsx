/**
 * @author lihao7364@163.com
 * @date 2022-03-11 18:40:27
 * @desc 外侧布局
 */
import React, { useEffect, FC } from 'react';
import { Layout, Menu, Select } from 'antd';
// import { LOGO } from '@/utils/constans'
import $ from './style.less';

const { Header, Content } = Layout;
const { Option } = Select;
/**  */
const Index: FC = (props) => {
  useEffect(() => {}, []);
  return (
    <Layout className="layout">
      <Header className={$.header}>
        <div>
          <img alt="logo" className={$.logo} />
        </div>
        <Select>
          <Option>yest</Option>
        </Select>
        <Menu
          className={$.nav}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
        >
          {new Array(3).fill(null).map((_, index) => {
            const key = index + 1;
            return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
          })}
        </Menu>
      </Header>
      <Content className={$.content}>{props.children}</Content>
    </Layout>
  );
};
export default Index;
