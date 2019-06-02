# Vue 响应式原理

在一个组件的初始化阶段会执行 initProps 和 initData，两个方法都是将相应的属性变成响应式，还有使用代理

代理是通过使用 Object.property() 重写 get 和 set，便可以使用 this.xxx 代替 this.props.xxx ，this.xxx 代替 this.data.xxx

observe 函数通过实例化 Observer 构造函数来实现响应式

在 Observer 类中，如果是对象则调用 walk 方法， 它为每个属性都执行 defineReactive 函数

如果是数组，会调用 observeArray 方法，它为数组的每个元素执行 observe 函数

defineReactive 函数会先创建一个 Dep 构造函数的实例，然后使用 Object.property() 递归改写每个子对象的 get 和 set

对于使用数组的一些方法，Vue 是将 Array.prototype 利用 Object.create 拷贝出来一份再重写，目的是防止污染原生

对于新增数据的方法，比如 push unshilft splice，会调用 observeArray 方法，它为数组的每个元素执行 observe 函数

然后使用 ob.dep.notify() 函数通知所有注册的观察者进行响应式处理

上面说到 Dep 这个类，它的目的是收集模版里使用到的属性，比如模版里渲染了 a 这个属性，但 data 里面有 a 和 b，如果修改了 b，也会导致重新执行渲染

它是一个发布者，它通过判断通是否存在 Dep.target 来添加观察者对象

当然说到发布者，肯定就有观察者，那就是 Watcher

