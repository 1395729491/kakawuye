<template>
  <div id="app">
    
    <router-view/>
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


<style lang="less">
*{
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
i,b,p,span{
  font-style: normal;
  display: block
}
ul,li{
  list-style: none;
}
input,button {
  border: none;
  outline: none;
  background: none
}
h1,h2,h3,h4,h5,h6{
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
}
#app {
  font-family:PingFangSC-Medium;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: white;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  font-size: 1rem;
}
</style>
