<template>
  <v-card max-width="400">
    <v-list>
      <v-subheader>TODOS</v-subheader>
      <v-list-item-group color="primary">
        <!-- 数组使用 for-of, for-in 都可以 -->
        <v-list-item
          v-for="(item, index) of todos"
          :key="`${index}_${item.text}`"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- 对象就得使用 for-in 了 -->
        <v-list-item v-for="(value, name, index) in object" :key="value">
          <v-list-item-content>
            <v-list-item-title>
              {{ index }}. {{ name }}: {{ value }}</v-list-item-title
            >
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

      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10',
      },
    }
  },
})
</script>
