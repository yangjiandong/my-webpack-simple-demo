<template>
  <div id="login">
    <mt-header title="登录">
      <router-link class="head-a" to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="login-logo">
      <img src="../assets/logo.png">
    </div>
    <div class="login-form">
      <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
      <br>
      <mt-button type="primary" size="large">登录</mt-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login'
  };
</script>

<style scoped>
  .head-a{
    color: #fff;
  }
  .login-logo {
    margin: auto;
    text-align: center;
    padding-top: 40px;
  }
  .login-logo img {
    margin: auto;
  }
  .form-line{
    font-size: 20px;
    padding: 5px 10px;
  }
  .form-input-label{

  }
</style>
