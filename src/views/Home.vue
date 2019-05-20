<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ShowIf/>
  </div>
</template>

<script>
import ShowIf from "@/components/ShowIf.vue";

export default {
  name: "home",
  components: {
    ShowIf
  }
};
</script>
