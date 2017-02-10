<template>
  <div id="index">
    <mt-header title="MINT-UI 演示">
      <router-link class="head-a" to="/login" slot="right">
        <mt-button>登录</mt-button>
      </router-link>
    </mt-header>

    <div class="app-logo">
      <img src="../assets/logo.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index'
  };
</script>

<style>
  .head-a {
    color: #fff;
  }

  .app-logo {
    margin: auto;
    text-align: center;
    padding-top: 40px;
  }

  .app-logo img {
    margin: auto;
  }
</style>
