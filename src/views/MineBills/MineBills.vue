<template>
  <div class="MB-bg">
        <div class="MB-nav">
            <ul>
                <li 
                  v-for="(mineBillNav,index) in MineBillNav" 
                  :key="index"
                  @click="GoMineBillNavs(index)"
                  :class="{MineBillNavSeleted:mineBillNav.isSelected}"
                  >
                  {{ mineBillNav.liText }}
                  </li>
            </ul>
        </div>
        <div 
          class="MB-list" 
          v-for="(MBList,index) in MBLIST" 
          :key="index"
          @click="GOMineBillDetail()"
        >
          <div class="MB-list-time">
                {{ MBList.MyBillsTime }}
          </div>
          <div class="MB-list-item">
              <div class="MB-list-item-left">
                  <img src="@/assets/Other/MyBill-wa.svg" alt="水费" v-if="MBList.MyBillsIcon1">
                  <img src="@/assets/Other/MyBill-el.svg" alt="电费" v-if="MBList.MyBillsIcon2">
                  <img src="@/assets/Other/MyBill-fg.svg" alt="燃气" v-if="MBList.MyBillsIcon3">
                  <img src="@/assets/Other/MyBill-re.svg" alt="物业" v-if="MBList.MyBillsIcon4">
                  <img src="@/assets/Other/MyBill-bd.svg" alt="宽带" v-if="MBList.MyBillsIcon5">
                  <p>{{ MBList.MyBillsName }}</p>
              </div>
              <div class="MB-list-item-right">
                  -{{ MBList.MyBillsMoney }}
              </div>
          </div>
        </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      MineBillNav: [
        {
          liText: "全部",
          isSelected: true
        },
        {
          liText: "水费",
          isSelected: false
        },
        {
          liText: "电费",
          isSelected: false
        },
        {
          liText: "燃气",
          isSelected: false
        },
        {
          liText: "物业",
          isSelected: false
        },
        {
          liText: "宽带",
          isSelected: false
        }
      ],
      MBLIST: [
        {
          MyBillsTime: "2018年7月3日",
          MyBillsName: "水费",
          MyBillsType: 1,
          MyBillsMoney: 400,
          MyBillsIcon1: false,
          MyBillsIcon2: false,
          MyBillsIcon3: false,
          MyBillsIcon4: false,
          MyBillsIcon5: false
        },
        {
          MyBillsTime: "2018年7月3日",
          MyBillsName: "电费",
          MyBillsType: 2,
          MyBillsMoney: 200,
          MyBillsIcon1: false,
          MyBillsIcon2: false,
          MyBillsIcon3: false,
          MyBillsIcon4: false,
          MyBillsIcon5: false
        },
        {
          MyBillsTime: "2018年7月3日",
          MyBillsName: "燃气",
          MyBillsType: 3,
          MyBillsMoney: 200,
          MyBillsIcon1: false,
          MyBillsIcon2: false,
          MyBillsIcon3: false,
          MyBillsIcon4: false,
          MyBillsIcon5: false
        },
        {
          MyBillsTime: "2018年7月3日",
          MyBillsName: "物业",
          MyBillsType: 4,
          MyBillsMoney: 200,
          MyBillsIcon1: false,
          MyBillsIcon2: false,
          MyBillsIcon3: false,
          MyBillsIcon4: false,
          MyBillsIcon5: false
        },
        {
          MyBillsTime: "2018年7月3日",
          MyBillsName: "宽带",
          MyBillsMoney: 200,
          MyBillsType: 5,
          MyBillsIcon1: false,
          MyBillsIcon2: false,
          MyBillsIcon3: false,
          MyBillsIcon4: false,
          MyBillsIcon5: false
        }
      ]
    };
  },
  methods: {
    GoMineBillNavs(index) {
      // 样式部分
      for (let i = 0; i < this.MineBillNav.length; i++) {
        this.MineBillNav[i].isSelected = false;
        this.MineBillNav[index].isSelected = true;
      }
      // 数据部分
      if (index == 0) {
        alert("我要请求全部的数据，默认加载全部");
      } else if (index == 1) {
        alert("我要去请求水费的数据");
      } else if (index == 2) {
        alert("我要去请求电费的数据");
      } else if (index == 3) {
        alert("我要去请求燃气的数据");
      } else if (index == 4) {
        alert("我要去请求物业的数据");
      } else if (index == 5) {
        alert("我要去请求宽带的数据");
      } else {
        return false;
      }
      // 请求的方法传入参数
    },
    // 请求的方法接受参数
    // 图标显示方法
    ShowMyBillsIcon() {
      for (let i = 0; i < this.MBLIST.length; i++) {
        if (this.MBLIST[i].MyBillsType == 1) {
          this.MBLIST[i].MyBillsIcon1 = true;
        } else if (this.MBLIST[i].MyBillsType == 2) {
          this.MBLIST[i].MyBillsIcon2 = true;
        } else if (this.MBLIST[i].MyBillsType == 3) {
          this.MBLIST[i].MyBillsIcon3 = true;
        } else if (this.MBLIST[i].MyBillsType == 4) {
          this.MBLIST[i].MyBillsIcon4 = true;
        } else if (this.MBLIST[i].MyBillsType == 5) {
          this.MBLIST[i].MyBillsIcon5 = true;
        } else {
          return false;
        }
      }
    },
    // 跳转详情
    GOMineBillDetail() {
      this.$router.push({ name: "minebillsdatail" });
    }
  },
  mounted() {
    this.ShowMyBillsIcon();
  }
};
</script>
<style lang="less" scoped>
@import "./MineBills.less";
</style>
