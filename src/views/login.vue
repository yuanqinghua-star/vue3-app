<template>
  <login-panel>
    <h2>检验评估平台</h2>
    <el-form-item>
      <el-input v-model="userInfo.username" placeholder="邮箱或手机号码" />
    </el-form-item>
    <el-form-item>
      <el-input v-model="userInfo.password" type="password" placeholder="请输入密码" />
    </el-form-item>
    <el-form-item>
      <router-link class="forget" to="/"> 找回密码 </router-link>
    </el-form-item>
    <el-form-item>
      <el-button class="submit" @click="doLogin">登录</el-button>
    </el-form-item>
  </login-panel>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRouter } from 'vue-router'
import store from '@/store'
import LoginPanel from "@/components/page/LoginPanel.vue";
import utils from "@/utils/utils";
import { ElMessage } from 'element-plus'

export default defineComponent({
  components: {
    LoginPanel,
  },
  setup(props, ctx) {
    let userInfo = reactive({
      username: "",
      password: ""
    })
    let router = useRouter()
    let doLogin = () => {
      if (utils.isEmpty(userInfo.username)) {
        ElMessage({
          message: '用户名不能为空',
          type: "error"
        })
        return false
      }
      if (utils.isEmpty(userInfo.password)) {
        ElMessage({
          message: '密码不能为空',
          type: "error"
        })
        return false
      }
      setTimeout(() => {
        let res = {
          token: "1000",
          username: "121123",
          email: "12123321"
        }
        sessionStorage.setItem("login-token", "1000")
        store.dispatch("login", res)
        router.push({path: "/home", query: { token: "1000" }})
      }, 500)
    }
    return {
      userInfo,
      doLogin
    };
  },
});
</script>

<style lang="scss" scoped>

  .el-input {
    .el-input__inner {
      border: none;
      background-color: #F9F9FB;
      color: #98A6AD;
      font-size: 16px;
      height: 50px;
      caret-color: #98A6AD;
    }
  }

  .register {
    margin: 20px 0 0;
    background: url("/static/images/login-register-line.png") no-repeat center;
    background-size: 100% auto;

    /deep/ .el-link, span {
      display: inline-block;
      vertical-align: middle;
      color: #98A6AD;

      .el-link--inner {
        font-size: 16px;
        color: #727CF5;
      }
    }
  }

  h2 {
    margin: 0 0 60px;
    font-weight: normal;
    font-size: 28px;
    color: #6C757D;
    line-height: 28px;
  }

  .forget {
    display: block;
    text-align: right;
    color: #727CF5;
    font-size: 16px;
  }

  .submit {
    margin: 10px 0 0;
    border: none;
    font-size: 16px;
    width: 100%;
    height: 46px;
    background-color: #727CF5;
    color: #FFFFFF;
  }
  .el-button:focus, .el-button:hover {
    border-color: #727CF5;
    background-color: #727CF5;
    color: #FFFFFF;
  }

</style>