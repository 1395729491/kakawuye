<template>
  <div> 
      <div class="ftbtn-left">
          <slot name="left"></slot>
      </div>
      <div class="ftbtn-right">
        <slot name="right"></slot>
      </div>
  </div>
</template>
<style lang="less" scoped>
  .ftbtn-left {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 42%;
    height: 2.94rem;
    line-height: 2.94rem;
    background: rgba(255, 255, 255, 1);
    opacity: 0.9878;
    border-top: 0.06rem solid #e6e6e6;
    text-align: center;
    color: #ff5757;
    font-size: 1rem;
    float: left;
  }
  .ftbtn-right {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 58%;
    height: 2.94rem;
    line-height: 2.94rem;
    background: linear-gradient(
      227deg,
      rgba(255, 139, 85, 1) 0%,
      rgba(255, 102, 87, 1) 100%
    );
    opacity: 0.9878;
    text-align: center;
    color: white;
    font-size: 1.13rem;
    float: right;
  }
</style>
