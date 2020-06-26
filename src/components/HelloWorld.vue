<template>
  <v-card class="mx-auto" max-width="400" tile>
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

<script lang="js">
export default {
  name: 'HelloWorld',
  props: ['dataList'],
  data() {
    return {
      todos: this.dataList,

    };
  },
}
</script>
