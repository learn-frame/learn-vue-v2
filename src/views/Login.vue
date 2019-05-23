<template>
  <div class="login">
    <h1>Login</h1>
    <el-form ref="form" :model="params" label-width="80px" :rules="rules">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="params.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="params.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login" :loading="loading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { randomString, sleep, successToast, errorToast } from "../utils/tools";
import { LOGIN } from "../store/mutation-types";
export default {
  name: "Login",
  data() {
    return {
      params: {
        userName: "",
        password: ""
      },
      loading: false,
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },

  watch: {},
  computed: {},
  mounted() {},
  methods: {
    login() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true;
          try {
            await sleep();
            this.$store.commit({
              type: LOGIN,
              token: randomString(),
              userName: this.params.userName,
              userId: randomString()
            });
            successToast(this, "登录成功");
            this.$router.push("/");
          } catch (e) {
            errorToast(this, "登录失败");
          } finally {
            this.loading = false;
            this.resetForm();
          }
        } else {
          errorToast(this, "请输入正确的用户名和密码");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs.form.resetFields();
    }
  }
};
</script>

<style lang="scss" scope>
.login {
  .el-form {
    margin: 0 auto;
    max-width: 40%;
  }
}
</style>
