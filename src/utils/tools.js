export const needSpace = child =>
  /^[\u4E00-\u9FA5\uF900-\uFA2D]+$/.test(child) && child.length === 2
    ? child.split('').join(' ')
    : child;
