<template>
  <div class="bg">
      <div class="MM-bg">
          <div class="MM-headerimg">
              <img src="@/assets/MyMine/mineHeader.svg" alt="">
          </div>
          <p class="MM-myname">胡曦格</p>
      </div>
      <div class="MM-box">
          <div class="MM-nav">
              <ul>
                  <li v-for="(item,index) in MineNav" :key="index">
                      <img :src="item.imgurl" alt="">
                      <p>{{ item.text }}</p>
                  </li>
              </ul>
          </div>
          <div class="MM-personZL">
              <h6>个人资料</h6>
              <ul>
                  <li v-for="(item,index) in PerSonZL" :key="index">
                      <span>{{ item.span }}</span>
                      <p>{{item.text }}</p>
                  </li>
              </ul>
          </div>
      </div>
      <div class="MM-curFC">
            <h6>当前房产</h6>
            <div class="MM-curFC-context">
                <p>XX小区XX栋XX单元XX楼XX号XX小区XX栋XX单元XX楼XX号</p>
                <i></i>
            </div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
        MineNav:[
          {
            imgurl:require("@/assets/MyMine/mineIcon1.svg"),
            text:'缴费账单'
          },
           {
            imgurl:require("@/assets/MyMine/mineIcon2.svg"),
            text:'我的订单'
          },
           {
            imgurl:require("@/assets/MyMine/mineIcon3.svg"),
            text:'我的维修'
          },
        ],
        PerSonZL:[
          {
            span:"业主",
            text:"胡曦格"
          },
          {
            span:"联系方式",
            text:"18798808784"
          },
          {
            span:"地址",
            text:"XX小区XX栋XX单元XX楼XX号XX小区XX栋XX单元XX楼XX号"
          },
        ]
    }
  }
}
</script>
<style lang="less" scoped>
@import "./MyMine.less";
</style>

