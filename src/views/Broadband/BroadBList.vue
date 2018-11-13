<template>
  <div>
      <div class="BDBanner">

      </div>
      <div class="BDList" v-for="(bdlist,index) in BDList" :key="index" @click="SeeDetail">
          <div class="BDList-title">{{ bdlist.title }}</div>
          <ul>
              <li v-for="(item,index) in ComboOne" :key="index">
                  {{ item.text }}
              </li>
          </ul>
          <div class="BDList-tips">
            {{ bdlist.listname }}
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      // 暂时模拟有3个
        BDList:[
          {
            title:'中国电信超值豪华套餐',
            listname:'套餐1',
          },
          {
            title:'中国电信超值豪华套餐',
            listname:'套餐2',
          },
          {
            title:'中国电信超值豪华套餐',
            listname:'套餐3',
          }
        ],
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
  },
  methods:{
    SeeDetail(){
      this.$router.push({name:'broadetail'});
    }
  }
}
</script>
<style lang="less" scoped>
@import "./Broadband.less";
</style>
