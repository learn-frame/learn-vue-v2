import { getType } from 'yancey-js-util';

export const needSpace = child =>
  /^[\u4E00-\u9FA5\uF900-\uFA2D]+$/.test(child) && child.length === 2
    ? child.split('').join(' ')
    : child;

export const randomString = () =>
  Math.random()
    .toString(36)
    .slice(2);

export const sleep = (delay = 1000) =>
  new Promise(resolve => {
    setTimeout(() => resolve(), delay);
  });

export const successToast = (that, text) => {
  that.$message.success(text);
};

export const errorToast = (that, text) => {
  that.$message.error(text);
};

function shallowCopy(obj) {
  if (typeof obj !== 'object') return;
  const _obj = Array.isArray(obj) ? [] : {};
  for (let i in _obj) {
    if (obj.hasOwnProperty(i)) {
      _obj[i] = obj[i];
    }
  }
  return _obj;
}

function deepCopy(obj) {
  if (typeof obj !== 'object') return;
  const _obj = Array.isArray(obj) ? [] : {};
  for (let i in _obj) {
    if (obj.hasOwnProperty(i)) {
      _obj[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i];
    }
  }
  return _obj;
}
