/**
 * @author leesin
 * @date 2022-03-11 17:24:41
 * @desc 首页
 */
import React, { useEffect, useState, FC, useCallback, useRef } from 'react';
import { Button } from 'antd';
import html2canvas from 'html2canvas';
import $ from './style.less';

interface Props {
  data?: object;
}
/** 
 * canvas
 * 杯子是一个系列，从口味和产地
 * 袋子稍微简单一点
 * 理念：白日梦 I Have A Dream
 */
const Index: FC<Props> = props => {
  const [data, setData] = useState();
  console.log(props);
  const refss = useRef(null);

  useEffect(() => {
    // html2canvas(document.body).then(function (canvas) {
    // document.body.appendChild(canvas);
    // });
  }, []);
  /** 截图 */
  const handleShort = useCallback(async () => {
    await html2canvas(refss.current, {
      backgroundColor: null,// null 表示设置背景为透明色
      useCORS: true, // 是否尝试使用CORS从服务器加载图像
      allowTaint: true, //允许跨域（图片跨域相关），服务器也需要做相应的图片跨域处理
      taintTest: true, //是否在渲染前测试图片
      scale: 3, // dpr比列
      scrollY: 0 // 截屏时页面滚动，造成截屏图片不全或空白
    })
      .then(canvas => {
        let dataURL = canvas.toDataURL("image/png");
        console.log(dataURL)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div className={$.index} ref={refss}>
      <Button type='primary' onClick={handleShort}>截图</Button>
      <div>2222</div>
    </div>
  );
};
export default Index;