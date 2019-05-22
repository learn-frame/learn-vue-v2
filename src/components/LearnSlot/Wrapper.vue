<template>
  <div class="wrapper">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot v-slot="slotProps"></slot>
    </main>
    <aside>
      <slot name="aside"></slot>
    </aside>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Wrapper",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scope>
header {
  grid-area: header;
}
main {
  grid-area: main;
  height: 400px;
}
aside {
  grid-area: aside;
}
footer {
  grid-area: footer;
}

header,
main,
aside,
footer {
  border: 1px solid #ccc;
}
.wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 20% 20% 20% 20%;
  grid-template-rows: auto;
  grid-template-areas:
    "header header header header"
    "main main main aside"
    "footer footer footer footer";
  justify-content: center;
}
</style>
