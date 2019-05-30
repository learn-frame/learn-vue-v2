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

const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject) {
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open('GET', url);
    client.onreadystatechange = handler;
    client.responseType = 'json';
    client.setRequestHeader('Accept', 'application/json');
    client.send();
  });

  return promise;
};

// 存储型 XSS
// 用户私信/网站评论 里面用户输入了恶意代码，被提交到了数据库
// 在请求接口后渲染时造成 XSS

// 反射型 XSS
// 恶意代码会被存储到 URL 中，当打开时会将恶意代码拼接到 HTML 中
// 渲染页面时造成跨站脚本攻击

// DOM 型
// 前端代码不严谨，导致如使用 innerHTML 时插入了不安全的代码

// HTTP-only
// 验证码

// (1) 将数组的第一个位置设置为下边界(0)。
// (2) 将数组最后一个元素所在的位置设置为上边界(数组的长度减 1)。
// (3) 若下边界等于或小于上边界，则做如下操作。
// a. 将中点设置为(上边界加上下边界)除以 2。
// b. 如果中点的元素小于查询的值，则将下边界设置为中点元素所在下标加 1。
// c. 如果中点的元素大于查询的值，则将上边界设置为中点元素所在下标减 1。
// d. 否则中点元素即为要查找的数据，可以进行返回。

function binSearch(arr, data) {
  var upperBound = arr.length - 1;
  var lowerBound = 0;
  while (lowerBound <= upperBound) {
    var mid = Math.floor((upperBound + lowerBound) / 2);
    if (arr[mid] < data) {
      lowerBound = mid + 1;
    } else if (arr[mid] > data) {
      upperBound = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
