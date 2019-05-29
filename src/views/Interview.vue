<template>
  <div class="interview">
    <h1>一些面试题</h1>
    <div class="interview_content">
      <p class="strong">Q: data 为什么是函数而非一个对象?</p>
      <p>
        A: 因为组件可以被多次使用 (用来创建多个实例)，如果 data 是一个对象，则所有的实例将会共享一个对象。
        而函数则不同，它会在每个实例被创建的时候被调用，从而返回一个全新的副本对象。
      </p>

      <p class="strong">Q: 谈一谈生命周期?</p>
      <p></p>
      <figure>
        <img src="https://cn.vuejs.org/images/lifecycle.png" alt="lifecycle">
      </figure>

      <p class="strong">Q: Vue.filter</p>
      <p>{{1234567890 | thousands}}</p>

      <p class="strong">Q: Vue 数组/对象更新 视图不更新</p>
      <p>Vue 只能监听下面几种方式的变化：</p>
      <p>splice()、 push()、pop()、shift()、unshift()、sort()、reverse()</p>

      <p>对于数组，下面的操作是无法更新视图的</p>
      <p>this.arr[2] = "kasumi";</p>

      <p>你可以使用 $set</p>
      <p>this.$set(this.arr, 2, "kasumi");</p>

      <p>对象同理，下面的操作是无法更新视图的</p>
      <p>this.obj.gender = "male";</p>
      <p>delete this.obj.name;</p>

      <p>你可以使用 $set 或 $delete</p>
      <p>this.$set(this.obj, 'gender', "male");</p>
      <p>this.$delete(this.obj, 'name');</p>

      <p>当然还有个大杀器：this.$forceUpdate();</p>

      <p>{{arr}}</p>
      <p>{{obj}}</p>
      <el-button @click="handleClickChange">click</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Interview",
  data() {
    return {
      arr: ["yancey", "sayaka"],
      obj: {
        name: "yancey",
        age: 18
      }
    };
  },
  watch: {
    arr: {
      // watch 无法监听 $forceUpdate，但可以监听 $set 和 $delete
      handler(val, oldVal) {
        // console.log("默认立即触发一次", val, oldVal);
      },
      immediate: true,
      deep: true
    }
  },
  computed: {},
  mounted() {
  },
  methods: {
    handleClickChange() {
      console.log(this.$options.render);
      // this.arr[2] = "kasumi";
      // this.$set(this.arr, 2, "kasumi");

      // this.obj.gender = "male";
      // this.$set(this.obj, 'gender', "male");

      // delete this.obj.name;
      // this.$delete(this.obj, 'name');

      // this.$forceUpdate();
    }
  }
};
</script>

<style scoped lang="scss">
.interview_content {
  text-align: left;
  .strong {
    font-weight: bold;
  }
  figure {
    text-align: center;
  }
  img {
    width: 600px;
  }
}
</style>
