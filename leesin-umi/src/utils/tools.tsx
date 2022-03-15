/**
 * 深度聚合，类似于{...obj1, ...obj2}
 * 但对于对象会递归聚合，而不仅仅是替换
 * 如果obj1.key obj2.key 都是对象会递归聚合
 */
export const deepAggregate = (obj1: object, obj2: object) => {
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return { ...obj1, ...obj2 };
  }
  const res = {};
  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);
  const arr = Array.from(new Set(arr1.concat(arr2)));
  arr.forEach((key) => {
    const val1 = obj1[key];
    const val2 = obj2[key];
    if (
      typeof val1 === "object" &&
      typeof val2 === "object" &&
      !Array.isArray(val1) &&
      !Array.isArray(val2)
    ) {
      res[key] = deepAggregate(val1, val2);
      return;
    }
    /** 抹平 {...val1, ...val2} 但val2对应属性为空的情况 */
    res[key] = val2 !== undefined ? val2 : val1;
  });
  return res;
};

/**
 * 获取localStorage中的缓存
 * 返回对象
 */
export const getCache = (nameSpace: string) => {
  const res = localStorage.getItem(nameSpace)
  const result = res ? JSON.parse(res) : null
  return result || null
}

/** 聚合到设置到localStorage，对象聚合，数组直接替换，不仅仅是设置 */
export const setCache = (nameSpace: string, obj: object | any): void => {
  let res = localStorage.getItem(nameSpace);
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    res = JSON.stringify(res ? { ...JSON.parse(res), ...obj } : obj)
  } else {
    res = typeof obj === 'string' ? obj : JSON.stringify(obj)
  }
  return localStorage.setItem(nameSpace, res || '')
}

/** 使用JSON.parse.stringify简单的clone */
export function simpleDeepClone<T extends object>(obj: T): T {
  return obj ? JSON.parse(JSON.stringify(obj)) : obj
}

/**
 * @param obj 
 * @param key 
 * @returns 
 * 获取obj对应的嵌套key的值，key支持级联，数组;返回新的对象，对象内部使用JSON进行clone
 */
export function getNestValue(obj: object, key: string | (string | number[])): any {
  if (!obj || !key) return;
  const arrKey = Array.isArray(key) ? key : key.split('.');
  let res = obj;
  const len = arrKey.length;
  try {
    for (let i = 0; i < len; i++) {
      const current = arrKey[i]
      res = res[current]
    }
  } catch (e) {
    console.log(`对象取值异常: obj:${obj} key:${key}`);
  }
  return res;
}

/**
 * 为obj设置嵌套的key值 返回新的对象
 * 和getNestValue相对应
 * 思路：(obj, 'a.b.c.d',12); 找到obj的'a.b.c.d'对应的对象，如果没有则构建；然后赋值xx[d]=12
 * @param obj 原始对象
 * @param key 需要处理的key
 * @param value 需要设置的值
 * @param isNeedClone 默认为true，为true时返回新的对象，否则为在原对象上修改属性
 * @注意 这是使用isNeedClone默认值有问题；当isNeedClone参数不传时应该符合思维方式；默认值为false而不是true
 */
export function setNestValue(obj: object, key: string | (string | number[]), value: any, isNeedClone: boolean = true): object {
  if (!obj || !key) {
    throw new Error('setNestValue 参数均不能为空');
  }
  const arrKey = Array.isArray(key) ? key : key.split('.');
  const len = arrKey.length - 1;
  // 后续对cloneObj进行操作
  const cloneObj = isNeedClone ? simpleDeepClone(obj) : obj;
  let res = cloneObj;
  try {
    for (let i = 0; i < len; i++) {
      const current = arrKey[i]
      if (typeof res[current] === 'object') {
        res = res[current]
      } else {
        res = res = res[current] = {};
      }
    }
  } catch (e) {
    throw new Error(`对象赋值异常：obj:${obj} key:${key} \n e`);
  }
  return cloneObj;
}