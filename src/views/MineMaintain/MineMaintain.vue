<template>
  <div class="MM-bg">
      <div class="MM-nav">
        <ul>
            <li 
              v-for="(minemaintainNav,index) in MineMaintainNav" 
              :key="index"
              @click="GoMineMainttainNavs(index)"
              :class="{liActive:minemaintainNav.isliActive}"
              >
              {{ minemaintainNav.liText }}
              </li>
        </ul>
      </div>
      <div class="MM-content">
          <div 
              class="MM-content-item" 
              v-for="(itemList,index) in MMItemList"
              :key="index"
              @click="MineMaintainDetail(itemList)"
          >
              <div class="MM-content-item-img">
                  <img :src="itemList.MMItemIMG" alt="">
              </div>
              <div class="MM-content-item-info">
                  <p>
                    <label>保修地点:</label> 
                    <span>{{ itemList.MMItemAdres }}</span> 
                    </p>
                  <p>
                    <label>保修设备</label>
                    <span>{{ itemList.MMItemSheBei }}</span>
                  </p>
                  <p>
                    <label>报修时间:</label>
                    <span>{{ itemList.MMItemTime }}</span>
                  </p>
                  <p>
                    <label>报修状态:</label>
                    <span class="MM-color">{{ itemList.MMItemStateText }}</span>
                  </p>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      MineMaintainNav: [
        {
          liText: "未受理",
          isliActive: true
        },
        {
          liText: "已受理",
          isliActive: false
        },
        {
          liText: "已完成",
          isliActive: false
        }
      ],
      MMItemList:[
        {
          MMItemIMG:require('@/assets/Other/test4.png'),
          MMItemAdres:'XX小区XX楼XX栋XX号',
          MMItemSheBei:'电梯',
          MMItemTime:'2018-12-12 14:00',
          MMItemState:1, //1为未受理 2为已受理 3已完成
          MMItemStateText:''
        },
        {
          MMItemIMG:require('@/assets/Other/test4.png'),
          MMItemAdres:'XX小区XX楼XX栋XX号',
          MMItemSheBei:'电梯',
          MMItemTime:'2018-12-12 14:00',
          MMItemState:2, //1为未受理 2为已受理 3已完成
          MMItemStateText:''
        },
        {
          MMItemIMG:require('@/assets/Other/test4.png'),
          MMItemAdres:'XX小区XX楼XX栋XX号',
          MMItemSheBei:'电梯',
          MMItemTime:'2018-12-12 14:00',
          MMItemState:3, //1为未受理 2为已受理 3已完成
          MMItemStateText:''
        },
      ]
    };
  },
  methods:{
    GoMineMainttainNavs(index){
       console.log(index)
       // 样式部分
      for (let i = 0; i < this.MineMaintainNav.length; i++) {
        this.MineMaintainNav[i].isliActive = false;
        this.MineMaintainNav[index].isliActive = true;
      }
       // 数据部分
      if (index == 0) {
        alert("我要请求未受理的数据，默认加载未受理");
      } else if (index == 1) {
        alert("我要去请求已受理的数据");
      } else if (index == 2) {
        alert("我要去请求已完成的数据");
      }else {
        return false;
      }
    },
   // 图标显示及根据状态值来改变保修状态值
   StateChangeStateText(){
     for(let i=0 ;i<this.MMItemList.length;i++){
       if(this.MMItemList[i].MMItemState==1){
         this.MMItemList[i].MMItemStateText='未受理'
       }else if(this.MMItemList[i].MMItemState==2){
         this.MMItemList[i].MMItemStateText='已受理'
       }else if(this.MMItemList[i].MMItemState==3){
         this.MMItemList[i].MMItemStateText='已完成'
       }else{
         return false;
       }
     }
   },
  //  根据状态值跳转不同的维修详情
   MineMaintainDetail(itemList){
     if(itemList.MMItemState==1){
       this.$router.push({name:'MMDoNo'});
     }else if(itemList.MMItemState==2){
       this.$router.push({name:'MMDoIng'});
     }else if(itemList.MMItemState==3){
       this.$router.push({name:'MMDoDone'});
     }else{
       return false;
     }
   }
  },
  mounted(){
    this.StateChangeStateText();
  }
};
</script>
<style lang="less" scoped>
@import "MineMaintain.less";
</style>
