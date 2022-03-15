import { useEffect } from 'react';
import { deepAggregate, setNestValue } from '@/utils/tools'
import { Button } from 'antd'
import $ from './index.less';
import 'antd/dist/antd.css';

/** React */
export default function IndexPage() {
  const obj1 = { a: { b: 'b', c: 'c' }, d: 'd', e: { f: { g: 'g' } }, h: 'h' }
  const obj2 = { a: { b: 'b' }, d: 'd2', e: { f: { g: 'g2' } } }
  const obj3 = { a: 1 }
  const e = deepAggregate(obj1, obj2)
  const f = setNestValue(obj3, 'b', '1')
  useEffect(() => {
    console.log(e);
    console.log(f);
  }, [])
  return (
    <div className={$.title}>
      <Button>ceshi</Button>
    </div>
  );
}
