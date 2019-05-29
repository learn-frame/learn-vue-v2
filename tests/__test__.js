const sleep = (delay = 2000) =>
  new Promise(resolve => {
    setTimeout(() => resolve(), delay);
  });

async function ajax() {
  await sleep(2000);
  console.log('delay');
}

ajax();

// 手写一个 new
function myNew(Con, ...args) {
  const o = {};
  Object.setPrototypeOf(o, Con.prototype);
  const res = Con.apply(o, args);
  return res instanceof Object ? res : o;
}

// 手写一个防抖
// 联想搜索/resize
function debounce(fn, delay) {
  let timer = null;
  return function() {
    clearTimeout(timer);
    setTimeout(() => {
      fn.call(this, arguments);
    }, delay);
  };
}

// 手写一个节流
// 防止持续点击/scroll
function throttle(fn, delay) {
  let canRun = false;
  return function() {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      fn.call(this, arguments);
      canRun = true;
    }, delay);
  };
}

// HTTPS

// 客户端发送 HTTPS 请求
// 收到 CA 证书
// 验证证书的有效性
// 客户端生成随机数，并用公钥加密生成一个密钥，传给服务端
// 服务端将此密钥解密，和要发给客户端的信息进行对称加密
// 客户端用密钥解密信息

const flattenDeep = arr =>
  arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    []
  );

Function.prototype.bind2 = function(thisArg, ...args) {
  if (typeof this != 'function') {
    throw TypeError('not a function');
  }

  const fn = this;

  const resFn = function() {
    // this instanceof resFn === true 时,说明返回的 resFn 被当做 new 的构造函数调用
    return fn.apply(this instanceof resFn ? this : thisArg, args);
  };

  function F() {}
  F.prototype = this.prototype;
  resFn.prototype = new F();

  return resFn;
};

// 客户端发送一个 ACK=1 的包，此时客户端进入 SYN-SEND 阶段
// 服务端收到后，发送一个 ACK/SYN 的包，此时服务端进入 SYN-CRVD 阶段
// 客户端收到后再次发送一个 ACK 包，此时客户端服务器都进入 ESTABLISHED
