<template>
  <div class="bg">
      <div class="MH-top">
          <div class="MH-top-left">
              <i></i>当前房产:XX小区XX栋XX单元XX号
          </div>
          <div class="MH-top-right">
              <i></i>
          </div>
      </div>
      <div class="MH-lunbo">
            <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide><img src="@/assets/MyHome/HomeBanner.svg" alt=""></swiper-slide>
            <swiper-slide><img src="@/assets/MyHome/HomeBanner.svg" alt=""></swiper-slide>
            <swiper-slide><img src="@/assets/MyHome/HomeBanner.svg" alt=""></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
      </div>
      <div class="MH-Notice" @click="GoNoticeList">
          <div class="MH-Notice-time">
                <span class="Tian">23</span>
                <span class="Yue">5月</span>
          </div>
          <div class="MH-Notice-content">
              <h2>停水公告</h2>
              <p>今日南明区部分小区停水,具体来水时间请关注...</p>
          </div>
      </div>
      <div class="MH-LivePay">
          <p class="MH-LivePay-title">生活缴费</p>
          <ul>
            <li v-for="(item,index) in LivePay" :key="index" @click="MHLiftNav(index)">
                <img :src="item.imgurl" alt="">
                <p>{{ item.text }}</p>
            </li>
          </ul>
      </div>
      <div class="MH-Services">
          <p class="MH-Services-title">生活服务</p>
          <ul>
              <li v-for="(item,index) in Services" :key="index" @click="MHSerNav(index)">
                  <img :src="item.imgurl" alt="">
                  <p>{{ item.text }}</p>
              </li>
          </ul>
      </div>
      
      <div class="Come-bg" v-if="VBG" @click="ColseVBG">
       
      </div>
      <transition name="TopAnimation" >
                <div class="Come-box" v-if="Vonce">
                      <h1>欢迎</h1>
                      <p>尊敬的用户您好,欢迎您使用咔咔物业,为了方便您的使用,请先到个人中心查看个人信息是否正确~</p>
                      <div class="GoMinePerson">
                          <btn @click.native="GoMinePerson">前往个人中心</btn>
                      </div>
                </div>
      </transition>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import btn from "@/components/button.vue";
export default {
  components: { swiper, swiperSlide, btn },
  data() {
    return {
      ComeStates:0,
      VBG: false,
      Vonce: false,
      swiperOption: {
        notNextTick: true,
        autoplay: true,
        speed: 1000,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      LivePay: [
        {
          imgurl: require("@/assets/MyHome/LivePayIcon1.svg"),
          text: "水费缴费"
        },
        {
          imgurl: require("@/assets/MyHome/LivePayIcon2.svg"),
          text: "电费缴纳"
        },
        {
          imgurl: require("@/assets/MyHome/LivePayIcon3.svg"),
          text: "燃气缴纳"
        },
        {
          imgurl: require("@/assets/MyHome/LivePayIcon4.svg"),
          text: "物业缴纳"
        },
        {
          imgurl: require("@/assets/MyHome/LivePayIcon5.svg"),
          text: "宽带缴纳"
        },
        {
          imgurl: require("@/assets/MyHome/LivePayIcon6.svg"),
          text: "商铺"
        },
        {
          imgurl: require("@/assets/MyHome/LivePayIcon7.svg"),
          text: "社区维修"
        },
        {
          imgurl: require("@/assets/MyHome/LivePayIcon8.svg"),
          text: "车位租用"
        }
      ],
      Services: [
        {
          imgurl: require("@/assets/MyHome/ServicesIcon1.svg"),
          text: "咔咔快递"
        },
        {
          imgurl: require("@/assets/MyHome/ServicesIcon2.svg"),
          text: "咔咔家政"
        },
        {
          imgurl: require("@/assets/MyHome/ServicesIcon3.svg"),
          text: "咔咔公告"
        }
      ]
    };
  },
  methods: {
    GoNoticeList() {
      this.$router.push({ name: "notlist" });
    },
    MHLiftNav(index) {
      if (index == 0) {
        this.$router.push({ name: "water" });
      } else if (index == 1) {
        this.$router.push({ name: "elctr" });
      } else if (index == 2) {
        this.$router.push({ name: "gas" });
      } else if (index == 3) {
        this.$router.push({ name: "tenement" });
      } else if (index == 4) {
        this.$router.push({ name: "broadband" });
      } else if (index == 5) {
        this.$router.push({ name: "oviStore" });
      } else if (index == 6) {
        this.$router.push({ name: "maintain" });
      } else if (index == 7) {
        this.$router.push({ name: "rental" });
      } else {
        return false;
      }
    },
    MHSerNav(index) {
      if (index == 0) {
        this.$router.push({ name: "ship" });
      } else if (index == 1) {
        this.$router.push({ name: "housewifery" });
      } else if (index == 2) {
        this.$router.push({ name: "notlist" });
      } else {
        return false;
      }
    },
    GoMinePerson() {
      this.$router.push({ name: "mymine" });
    },
    ColseVBG() {
      this.VBG = false;
      this.Vonce = false;
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    count(){
      return this.$store.state.count
    }
  },
  mounted() {
    this.swiper.slideTo(1, 1000, true);
    // 动画部分 只加载一次
    let _this = this;
    if(localStorage.b==undefined){
        setTimeout(function() {
          console.log(this);
          _this.VBG = true;
          _this.Vonce = true;
        },2000);
        localStorage.b="1";
    }else{
      this.VBG=false;
      this.Vonce=false;
    }
  }
};
</script>
<style lang="less" scoped>
.bg {
  background: #f4f4f4;
  overflow: hidden;
}
@import "./MyHome.less";
</style>
