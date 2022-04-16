/**
 * @author leesin
 * @date 2022-03-21 23:55:07
 * @desc icon
 */
import React, { useEffect, useState, FC } from 'react';
import { Tooltip } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import $ from './style.less';

interface Props {
  data?: object;
}
/** 搜索 */
const IndexSearch: FC<Props> = (props) => {
  const [icon, setIcon] = useState(false);
  useEffect(() => {}, []);
  const test = {
    0: {
      title: '展开',
    },
    1: {
      title: '收起',
    },
  };
  const handleTest = () => {
    setIcon(!icon);
  };
  return (
    <div className="index">
      <Tooltip title={test[+icon].title}>
        <UpOutlined className={$.test} data-type={icon} onClick={handleTest} />
      </Tooltip>
    </div>
  );
};
export default IndexSearch;
