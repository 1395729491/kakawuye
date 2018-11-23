<template>
  <div class="HD-bg">
      <div class="HD-img">
          <img src="@/assets/Other/test3.svg" alt="">
      </div>
      <div class="HD-item-info">
          <div class="HD-item-info-item">
              <span>张月嫂</span>
              <p>￥1700 / 月</p>
          </div>
          <p class="HD-item-info-tag">
              <span>高级月嫂</span>
              <span>经验丰富</span>
          </p>
      </div>
      <div class="HD-content">
          <div class="HD-title">服务流程</div>
          <div class="HD-content-flow">
                在线下单 &#8594 阿姨接单 &#8594 提供服务 &#8594 完成服务 &#8594 订单完成
          </div>
          <div class="HD-title">服务详情</div>
          <div class="HD-content-flow">
             <p> 1.卫生护理：保持母婴室内卫生的清洁、空气清新;观察产妇身体情 况(主要是乳房、恶露、大小便);清洗、消毒产妇衣物;在产妇不能 自理时帮助产妇擦洗身体，照顾产妇饮食。 </p>
              <p>2.乳房护理：帮助产妇清洗、热敷，按摩乳房，减轻乳房胀痛，指 导产妇正确哺乳，协助产妇纠正乳头凹陷，护理乳头破裂。 </p>
             <p> 3.脐部护理、臀部护理 </p>
              <p>4.必要时做口腔护理 </p>
             <p> 5.更换、清洗、消毒衣物、尿布、床单、抱单等婴儿用品。</p>
             <p> 6.每日测体温两次，对新生儿进行日常观察护理，如有异常提醒客 户 </p>
             <p> 二、产妇的护理 1.日常清洁：协助产妇漱口、洗脸、洗脚、擦汗、会阴清洁;对家中 室温达到26℃、有淋浴设施等条件的产妇给予协助洗头、洗澡(应尊 重客户意见) </p>
          </div>
      </div>
      <fbtn @click.native="GoHouserOrder()">立即下单</fbtn>
  </div>
</template>
<script>
import fbtn from "@/components/fiexbtn.vue";
export default {
  components: { fbtn },
  data() {
    return {};
  },
  methods:{
      GoHouserOrder(){
          this.$router.push({name:'houseorder'});
      }
  }
};
</script>
<style lang="less" scoped>
.HD-one {
    margin-bottom: 3rem;
    z-index: 0;
}
@import "./Housewifery.less";
</style>
