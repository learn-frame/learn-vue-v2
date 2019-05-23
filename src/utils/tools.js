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
