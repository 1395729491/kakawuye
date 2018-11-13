<template>
      <button>
          <slot></slot>
      </button>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
  button {
    width:13rem;
    height:2.06rem;
    line-height: 2.06rem;
    background:linear-gradient(227deg,rgba(255,139,85,1) 0%,rgba(255,102,87,1) 100%);
    box-shadow:-0.25rem 0.38rem 1.44rem -0.31rem rgba(156,31,7,1);
    border-radius:1.28rem;
    opacity:0.9878; 
    margin: 0 auto;
    display: block;
    color: white;
    font-size:1rem;
  }
</style>
