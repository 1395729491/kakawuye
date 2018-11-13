<template>
  <div>
       <div class="BDList" >
          <div class="BDList-title">中国电信超值豪华套餐</div>
          <ul>
              <li v-for="(item,index) in ComboOne" :key="index">
                  {{ item.text }}
              </li>
          </ul>
          <div class="BDList-tips">
             套餐1 
          </div>
      </div>
      <div class="BDDeatial-contenx">
        <P>219（元/月） 独享8M有线 259（元/月） 独享12M有线 339（元/月） 独享20M有线</P> 
        <P>1、3G手机上网120M、 WiFi 100小时； </P> 
        <P>2、100元通话费； </P> 
        <P>3、固话本地畅打1000分钟； </P> 
        <P>4、手机国内接听免费； </P> 
        <P>5、手机、固话本地互打免费。 </P> 
        <P>6、超值赠送：固话来电显示、彩铃、天翼视讯、天翼阅 读、爱游戏、天翼视讯手机报功能费。 套外资费 </P> 
        <P>1、手机本地通话：0.09元/分钟 </P> 
        <P> 2 、固话本地通话：0.15元/分钟。</P> 
        <P> 3、固话普通国内长途：0.15元/分钟。 </P> 
        <P> 4、手机普通国内长途：0.15元/分钟。 </P> 
        <P>5、手机国内漫游主叫：0.15元/分钟。 </P> 
        <P> 6、固话IP国内长途：0.3元/分钟，不加收本地电话接入费 </P> 
        <P> 7、手机IP 国内长途：0.3元/分钟，不加基本通话费 </P> 
        <P>8、手机上网：0.0003元/Kb，每部手机1000元封顶 </P> 
      </div>
      <div class="BroadDetail-btn">
          立即预约
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
        ComboOne:[
          {
            text:'8M单宽带'
          },
          {
            text:'高清itv一年'
          },
          {
            text:'高清itv机顶盒'
          },
          {
            text:'免费提速至100m一年'
          },
          {
            text:'免费提速至100m'
          },
        ]
    }
  }
}
</script>
<style lang="less" scoped>
@import "./Broadband.less";
</style>
