<template>
  <div class="vue-router">
    <h1>This is a vue-router page</h1>

    <hello-world />
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Component from 'vue-class-component';

export default {
  components: {
    HelloWorld,
  },
}
</script>
