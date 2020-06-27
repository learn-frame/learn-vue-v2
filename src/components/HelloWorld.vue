<template>
  <v-card max-width="400">
    <v-list>
      <v-subheader>TODOS</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in todos" :key="i">
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld',

  props: {
    dataList: { type: Array },
  },
  data() {
    return {
      todos: this.dataList.slice(0, 3),
    }
  },
})
</script>
