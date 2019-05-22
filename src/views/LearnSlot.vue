<template>
  <div class="learn_slot">
    <h1>Learn Slot</h1>
    <Parent :data="data">
      <Wrapper>
        <!-- 具名插槽可以写成 #slotName 的形式 (v2.6.x+)-->
        <template #header>
          <h2>header</h2>
        </template>

        <!-- 也可以写成 v-slot:slotName 的形式 -->
        <template v-slot:main>
          <p>main content</p>
        </template>

        <template #aside>
          <div>
            <el-button type="primary" icon="el-icon-eleme"></el-button>
          </div>
        </template>

        <template #footer>
          <h2>footer</h2>
        </template>
      </Wrapper>
    </Parent>
  </div>
</template>

<script>
import Parent from "../components/LearnSlot/Parent";
import Wrapper from "../components/LearnSlot/Wrapper";
export default {
  name: "LearnSlot",
  components: { Parent, Wrapper },
  data() {
    return {
      data: [
        { name: "yancey", age: 18, tel: 10086 },
        { name: "sayaka", age: 25, tel: 10001 },
        { name: "kasumi", age: 26, tel: 10010 }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="scss" scope>
</style>
