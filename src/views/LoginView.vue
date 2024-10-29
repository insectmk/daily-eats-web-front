<script lang='ts'>
import { login } from '@/api/core/login'
import router from '@/router'

export default {
  name: 'LoginView',
  data() {
    return {
      codeUrl: "",
      loginForm: {
        username: "makun",
        password: "123456",
        rememberMe: true,
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "请输入您的账号" }
        ],
        password: [
          { required: true, trigger: "blur", message: "请输入您的密码" }
        ],
        code: [{ required: true, trigger: "change", message: "请输入验证码" }]
      },
      loading: false,
      register: false, // 开启注册
      captchaEnabled: false, // 开启验证码
    };
  },
  methods: {
    btnLogin() { // 登录
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          login(this.loginForm) // 发送请求
            .then(data => {
              if (data.code === 200) {
                localStorage.setItem('token', data.data) // 将token存到本地
                router.push({ // 跳转到首页
                  path: '/'
                })
              }
            })
        }
      })
    },
  }
}
</script>

<template>
  <div class="login">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
      <h3 class="title">每日饭菜后台管理</h3>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          type="text"
          auto-complete="off"
          placeholder="账号">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          auto-complete="off"
          placeholder="密码">
        </el-input>
      </el-form-item>
      <el-form-item prop="code" v-if="captchaEnabled">
        <el-input
          v-model="loginForm.code"
          auto-complete="off"
          placeholder="验证码"
          style="width: 63%">
        </el-input>
        <div class="login-code">
          <img alt="验证码" :src="codeUrl" class="login-code-img"/>
        </div>
      </el-form-item>
      <el-checkbox v-model="loginForm.rememberMe" style="margin:0 0 25px 0;">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button
          @click="btnLogin"
          :loading="loading"
          type="primary"
          style="width:100%;">
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
        <div style="float: right;" v-if="register">
          <router-link class="link-type" :to="'/register'">立即注册</router-link>
        </div>
      </el-form-item>
    </el-form>
    <!--  底部  -->
    <div class="el-login-footer">
      <span>Copyright © 2022-2024 insectmk.cn All Rights Reserved.</span>
    </div>
  </div>
</template>
