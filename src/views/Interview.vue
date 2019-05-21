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
    </div>
  </div>
</template>

<script>
export default {
  name: "Interview",
  data() {
    return {
      data: ""
    };
  },
  watch: {},
  computed: {},
  mounted() {},
  methods: {}
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
