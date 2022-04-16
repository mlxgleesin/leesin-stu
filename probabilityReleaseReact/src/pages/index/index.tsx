/**
 * @author leesin
 * @date 2022-03-11 17:24:41
 * @desc 首页
 */
import React, { useEffect, useState, FC, useCallback, useRef } from 'react';
import { Button, Tabs } from 'antd';
import html2canvas from 'html2canvas';
import IndexSearch from '@/pages/index/components/search/index';
import { APP_LIST } from '@/utils/constans';
import $ from './style.less';

const { TabPane } = Tabs;
interface Props {
  data?: object;
}
/** 首页 */
const Index: FC<Props> = (props) => {
  const [data, setData] = useState();
  console.log(props);
  const refss = useRef(null);

  useEffect(() => {}, []);
  const handleAppChange = useCallback((e) => {
    console.log(e);
  }, []);
  return (
    <div className={$.index}>
      <Tabs defaultActiveKey="1" onChange={handleAppChange}>
        {APP_LIST.map((item) => (
          <TabPane tab={item.value} key={item.key}>
            <IndexSearch />
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};
export default Index;
