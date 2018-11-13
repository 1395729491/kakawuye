<template>
  <div>
      <ul class="HomeNav">
          <li class="Homehome"><router-link to="/myhome">
            <i></i>
            <p>首页</p>
          </router-link></li>
          <li class="Homemy"><router-link to="/mymine">
            <i></i>
            <p>我的</p>
          </router-link></li>
      </ul>
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  }
}
</script>
<style lang="less" scoped>
@import './home.less';
</style>
