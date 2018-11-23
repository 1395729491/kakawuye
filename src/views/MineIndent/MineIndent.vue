<template>
  <div class="MI-bg">
     <div class="MI-nav">
        <ul>
            <li 
              v-for="(mineIdentNav,index) in MineIndentNav" 
              :key="index"
              @click="GoMineIdentNavs(index)"
              :class="{liActive:mineIdentNav.isliActive}"
              >
              {{ mineIdentNav.liText }}
              </li>
        </ul>
      </div>
      <div 
          class="MI-content" 
          v-for="(ident,index) in MineIdentContent"
          @click="GoIdentDetail(ident)"
      >
          <div class="MI-content-img">
              <img src="@/assets/Other/MI-caricon1.svg" alt="进行中" v-if="ident.IdentImg1">
              <img src="@/assets/Other/MI-caricon2.svg" alt="已发件" v-if="ident.IdentImg2">
          </div>
          <div class="MI-content-item">
                <div class="MI-content-top">
                     {{ ident.TdentTopText }}
                </div>
                <div class="MI-content-bottom">
                    <p class="MI-content-bottom-time">下单时间:{{ ident.TdentBottomTime }}</p>
                    <p class="MI-content-bottom-state">状态 :<span :class="{coloring:ident.TdentBottomStateColor}">{{ ident.TdentBottomStateText }}</span></p>
                </div>
                <p class="Mi-content-number" v-if="ident.TdentBottomNumber">物流编号:{{ ident.TdentBottomNumber }}</p>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
        MineIndentNav:[
          {
           liText:'全部',
           isliActive:true,
          },
           {
           liText:'进行中',
           isliActive:false,
          },
           {
           liText:'已发件',
           isliActive:false,
          }
        ],
        MineIdentContent:[
          {
              IdentState:1, //1进行中 2已发件
              IdentImg1:false,
              IdentImg2:false,
              TdentTopText:'寄往贵州省贵阳市花果园',
              TdentBottomTime:'2018-07-12 12:34',
              TdentBottomStateText:'',
              TdentBottomStateColor:false,
              TdentBottomNumber:'',
          },
           {
              IdentState:2, //1进行中 2已发件
              IdentImg1:false,
              IdentImg2:false,
              TdentTopText:'寄往贵州省贵阳市花果园',
              TdentBottomTime:'2018-07-12 12:34',
              TdentBottomStateText:'',
              TdentBottomStateColor:false,
              TdentBottomNumber:123456789098765456,
          },
          {
              IdentState:1, //1进行中 2已发件
              IdentImg1:false,
              IdentImg2:false,
              TdentTopText:'寄往贵州省贵阳市花果园',
              TdentBottomTime:'2018-07-12 12:34',
              TdentBottomStateText:'',
              TdentBottomStateColor:false,
              TdentBottomNumber:'',
          },
           {
              IdentState:2, //1进行中 2已发件
              IdentImg1:false,
              IdentImg2:false,
              TdentTopText:'寄往贵州省贵阳市花果园',
              TdentBottomTime:'2018-07-12 12:34',
              TdentBottomStateText:'',
              TdentBottomStateColor:false,
              TdentBottomNumber:123456789098765456,
          },
        ]
    }
  },
  methods:{
    GoMineIdentNavs(index){
      console.log(index)
       // 样式部分
      for (let i = 0; i < this.MineIndentNav.length; i++) {
        this.MineIndentNav[i].isliActive = false;
        this.MineIndentNav[index].isliActive = true;
      }
       // 数据部分
      if (index == 0) {
        alert("我要请求全部的数据，默认加载全部");
      } else if (index == 1) {
        alert("我要去请求进行中的数据");
      } else if (index == 2) {
        alert("我要去请求已发件的数据");
      }else {
        return false;
      }
    },
    // 图标显示及根据状态值来改变图片、状态说明、物流编号
    StateChangeSomething(){
        for(let i=0;i<this.MineIdentContent.length;i++){
          if(this.MineIdentContent[i].IdentState==1){
            this.MineIdentContent[i].IdentImg1=true
            this.MineIdentContent[i].TdentBottomStateText='进行中'
            this.MineIdentContent[i].TdentBottomStateColor=true
          }else if(this.MineIdentContent[i].IdentState==2){
            this.MineIdentContent[i].IdentImg2=true
            this.MineIdentContent[i].TdentBottomStateText='已发件'
          }else{
            return false;
          }
        }
    },
    // 跳转详情
    GoIdentDetail(ident){
      if(ident.IdentState==1){
        this.$router.push({name:'shipsuc'});
      }else if(ident.IdentState==2){
        this.$router.push({name:'mineidentdonedatail'});
      }else{
        return false;
      }
    }
  },
  mounted(){
    this.StateChangeSomething();
  }
}
</script>
<style lang="less" scoped>
@import "./MineIndent.less";
</style>
