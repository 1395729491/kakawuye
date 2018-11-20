<template>
  <div class="Ship-bg">
      <div class="Ship-title">
          填写电子表格
      </div>
      <div class="Ship-receiver">
          <div class="Ship-receiver-title">寄件人信息</div>
          <div class="Ship-input" v-for="(senderinfo,index) in SenderInfo" :key="index">
              <span>{{ senderinfo.spanText }}</span>
              <input type="text" :placeholder="senderinfo.placeholder">
          </div>
      </div>
      <div class="Ship-receiver">
          <div class="Ship-receiver-title">收件人信息</div>
          <div class="Ship-input" v-for="(receiverinfo,index) in ReceiverInfo" :key="index">
              <span>{{ receiverinfo.spanText }}</span>
              <input type="text" :placeholder="receiverinfo.placeholder">
          </div>
      </div>
      <div class="Ship-other">
            <div class="Ship-other-info">
                <span>物品重量</span>
                <div class="Ship-other-info-right">
                  <p>2kg</p>
                  <i></i>
                </div>
            </div>
            <div class="Ship-other-info">
                <span>期待上门取件时间</span>
                <div class="Ship-other-info-right">
                  <p>2018-05-31 14:00</p>
                  <i></i>
                </div>
            </div>
            <div class="Ship-other-info">
                <span>选择快递公司</span>
                <div class="Ship-other-info-right">
                  <p>2kg</p>
                  <i></i>
                </div>
            </div>
      </div>
      <fbtn @click.native="ShSucc">确认提交</fbtn>
  </div>
</template>
<script>
import fbtn from "@/components/fiexbtn";
export default {
  components: { fbtn },
  data() {
    return {
      SenderInfo: [
        {
          spanText: "姓名",
          placeholder: "输入寄件人姓名",
          inputText: ""
        },
        {
          spanText: "电话",
          placeholder: "输入寄件人电话",
          inputText: ""
        },
        {
          spanText: "寄件人地址",
          placeholder: "输入寄件人姓名",
          inputText: ""
        }
      ],
      ReceiverInfo: [
        {
          spanText: "姓名",
          placeholder: "输入收件人姓名",
          inputText: ""
        },
        {
          spanText: "电话",
          placeholder: "输入收件人姓名",
          inputText: ""
        },
        {
          spanText: "收件人地址",
          placeholder: "输入寄件人姓名",
          inputText: ""
        }
      ]
    };
  },
  methods: {
    ShSucc(){
      this.$router.push({name:'shipsuc'});
    }
  }
};
</script>
<style lang="less" scoped>
@import "./Ship.less";
</style>
