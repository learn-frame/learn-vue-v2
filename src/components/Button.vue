<template>
  <button :disabled="isDisabled" :class="`y_button ${colorType}`" @click="handleClick" >
    <i v-if="isShowIcon" :class="`el-icon ${iconType}`"></i>
    <slot v-slot="slotProps"></slot>
  </button>
</template>

<script>
import { needSpace } from "../utils/tools";
export default {
  name: "Button",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "default"
    },
    icon: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      data: ""
    };
  },
  watch: {},
  computed: {
    isShowIcon() {
      return this.icon || this.loading;
    },
    isDisabled() {
      return this.loading || this.disabled;
    },
    iconType() {
      return this.loading ? "el-icon-loading" : this.icon;
    },
    colorType() {
      return this.isDisabled ? "disabled" : this.type;
    }
  },
  mounted() {},
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>

<style scoped lang="scss">
.y_button {
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  color: #fff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 6px 16px;
  margin: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 0.4px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  user-select: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
}

.default {
  color: rgba(0, 0, 0, 0.87);
  background-color: #e0e0e0;
  &:hover {
    background: #d5d5d5;
  }
}

.primary {
  color: #fff;
  background-color: #2196f3;
  &:hover {
    background: #1976d2;
  }
}

.danger {
  color: #fff;
  background-color: #e10050;
  &:hover {
    background: #9d0038;
  }
}

.disabled {
  color: rgba(0, 0, 0, 0.26);
  box-shadow: none;
  background-color: rgba(0, 0, 0, 0.12);
  &:hover {
    background: #0000001f;
    cursor: not-allowed;
  }
}

.el-icon {
  margin-right: 4px;
}
</style>
