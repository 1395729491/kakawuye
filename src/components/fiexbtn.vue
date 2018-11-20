<template>
  <div>
      <button class="fiexbtn">
          <slot></slot>
      </button>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  }
}
</script>
<style lang="less" scoped>
    .fiexbtn {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 99;
      height:2.85rem;
      background:linear-gradient(227deg,rgba(255,139,85,1) 0%,rgba(255,102,87,1) 100%);
      box-shadow:-0.25rem 0.38rem 1.44rem -0.31rem rgba(156,31,7,1);
      opacity:0.9878; 
      color: white;
      font-size: 1.25rem;
      text-align:center;
    }
</style>
