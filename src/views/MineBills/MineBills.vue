<template>
  <div class="MB-bg">
        <div class="MB-nav">
            <ul>
                <li 
                  v-for="(mineBillNav,index) in MineBillNav" 
                  :key="index"
                  @click="GoMineBillNavs(index)"
                  :class="{MineBillNavSeleted:mineBillNav.isSelected}"
                  >
                  {{ mineBillNav.liText }}
                  </li>
            </ul>
        </div>
        <div class="MB-list">
          <div class="MB-list-time">
                2018年7月3日
          </div>
          <div class="MB-list-item">
              <div class="MB-list-item-left">
                  <i></i>
                  <p>水费</p>
              </div>
              <div class="MB-list-item-right">
                  -200
              </div>
          </div>
        </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
        MineBillNav:[
          {
            liText:'全部',
            isSelected:true,
          },
          {
            liText:'水费',
            isSelected:false,
          },
          {
            liText:'电费',
            isSelected:false,
          },
          {
            liText:'燃气',
            isSelected:false,
          },
          {
            liText:'物业',
            isSelected:false,
          },
          {
            liText:'宽带',
            isSelected:false,
          },
        ]
    }
  },
  methods:{
    GoMineBillNavs(index){
      // 样式部分
      for(let i=0;i<this.MineBillNav.length;i++){
          this.MineBillNav[i].isSelected=false;
          this.MineBillNav[index].isSelected=true;
      }
      // 数据部分
      if(index==0){
        alert("我要请求全部的数据，默认加载全部")
      }else if(index==1){
        alert("我要去请求水费的数据")
      }else if(index==2){
        alert("我要去请求电费的数据")
      }else if(index==3){
        alert("我要去请求燃气的数据")
      }else if(index==4){
        alert("我要去请求物业的数据")
      }else if(index==5){
        alert("我要去请求宽带的数据")
      }else{
        return false;
      }
      // 请求的方法
    }
  }
}
</script>
<style lang="less" scoped>
@import "./MineBills.less";
</style>
