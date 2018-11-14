<template>
  <div>
      <div class="MT-fill">
          <span>填写地址</span>
          <div class="fill-right">
            <input type="text" placeholder="请填写你要报修的地址">
          </div>
      </div>
      <div class="MT-fill">
          <span>选择设施</span>
          <div class="fill-right" @click="selectSB">
              <p >{{ Selects }}</p>
              <i>></i>
          </div> 
      </div>
      <div class="MT-fill">
          <span>预约时间</span>
         <div class="fill-right" @click="open">
             <p>
                <yd-datetime ref="datetime" v-model="datetime" slot="right" >

                </yd-datetime>
            </p>
             <i>></i>
          </div> 
      </div>
      <div class="MT-desc">
          <p class="MT-desc-title">添加描述</p>
          <div>
              <textarea></textarea>
          </div>
      </div>
      <div class="MT-photo">
          <p class="MT-photo-title">添加图片详情</p>
          <div class="MT-imgs">
            <div class="MT-img-box">
                <img src="@/assets/Other/test1.svg" alt="">
                <div class="cancle"></div>
            </div>
            <div class="MT-img-box">
                <img src="@/assets/Other/test1.svg" alt="">
                <div class="cancle"></div>
            </div>
            <div class="MT-img-box">
                <img src="@/assets/Other/test1.svg" alt="">
                <div class="cancle"></div>
            </div>
            <div class="MT-img-box">
                <img src="@/assets/Other/test1.svg" alt="">
                <div class="cancle"></div>
            </div>
            <div class="MT-btn">
                <i></i>
                继续添加
          </div>
          </div> 
      </div>
      <fbtn @click.native="GoMTInfo">提交报修</fbtn>
      <!--  -->
      <div class="SelectBg" v-show="SelectBg">
          <div class="SelectContext">
                <div class="SelectContext-title">
                    选择设施
                </div>
                <ul>
                    <li v-for="(selectlist,index) in SelectList" :key="index" @click="Selected(index)">
                        {{ selectlist.text }}
                        <span :class="{selected:selectlist.isselect}"></span>
                    </li>
                </ul>
          </div>
          <fbtn @click.native="MTSure">确定</fbtn>
      </div>
  </div>
</template>
<script>
import fbtn from "@/components/fiexbtn.vue";
export default {
  components: { fbtn },
  data() {
    return {
      startime: "2012-03-16 15:13",
      enttime: "2019-10-21 22:21",
      SelectBg: false,
      datetime: "",
      SelectList: [
        {
          text: "电梯",
          isselect: false
        },
        {
          text: "电路",
          isselect: false
        },
        {
          text: "燃气",
          isselect: false
        },
        {
          text: "门窗",
          isselect: false
        },
        {
          text: "公共卫生",
          isselect: false
        },
        {
          text: "公共设施",
          isselect: false
        },
        {
          text: "绿化",
          isselect: false
        },
        {
          text: "其他",
          isselect: false
        },
        {
          text: "水管",
          isselect: false
        }
      ]
    };
  },
  methods: {
    selectSB() {
      this.SelectBg = true;
    },
    Selected(index) {
      this.SelectList[index].isselect = !this.SelectList[index].isselect;
    },
    MTSure() {
      this.SelectBg = false;
    },
    open() {
      this.$refs.datetime.open();
    },
    GoMTInfo() {
      this.$router.push({name:'maintaininfo'});
    }
  },
  computed: {
    Selects() {
      let temp = [];
      for (let i = 0; i < this.SelectList.length; i++) {
        if (this.SelectList[i].isselect == true) {
          temp.push(this.SelectList[i].text);
        }
      }
      return temp.join(",");
    }
  },
  mounted() {
    // 获取当前时间
    const myDate = new Date();
    const year = myDate.getFullYear();
    const month = myDate.getMonth() + 1;
    const tian = myDate.getDate();
    const NowTime = year + "-" + month + "-" + tian;
    this.datetime = NowTime;
  }
};
</script>
<style lang="less" scoped>
@import "./Maintain.less";
</style>
