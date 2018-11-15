<template>
  <div>
        <div class="RT-box" 
            v-for="(retalarea,index) in RetalArea" 
            :key="index"
            @click="GoRTArea"
        >
            <div class="RT-area">
                <i></i>
                <p>{{ retalarea.ateas }}</p>
            </div>
            <div class="RT-surplus">
                {{ retalarea.surplus }}
            </div>
        </div>
        <div class="RTMyRental">
            <fbtn>
                <i></i>
                我的车位
            </fbtn>
        </div>
  </div>
</template>
<script>
import fbtn from "@/components/fiexbtn.vue";
export default {
  components: { fbtn },
  data() {
    return {
      RetalArea: [
        {
          ateas: "A区车位",
          surplus: 10
        },
        {
          ateas: "B区车位",
          surplus: 9
        },
        {
          ateas: "C区车位",
          surplus: 12
        }
      ]
    };
  },
  methods: {
    GoRTArea(){
      this.$router.push({name:'rentalarea'});
    }
  }
};
</script>
<style lang="less" scoped>
@import "./Rental.less";
</style>
