import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'logo',
      component: () => import('./views/Logo/logo.vue'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home/home.vue'),
      children: [{
          path: '/myhome',
          name: 'myhome',
          component: () => import('./views/MyHome/MyHome.vue'),
          meta: {
            title: '首页'
          }
        },
        {
          path: '/mymine',
          name: 'mymine',
          component: () => import('./views/MyMine/MyMine.vue'),
          meta: {
            title: '个人中心'
          }
        }
      ]
    },
    {
      path: '/notlist',
      name: 'notlist',
      component: () => import('./views/Notice/NoticeList.vue'),
      meta: {
        title: '社区公告'
      }
    },
    {
      path: '/notdetail',
      name: 'notdetail',
      component: () => import('./views/Notice/NoticeDetails.vue'),
      meta: {
        title: '社区公告'
      }
    },
    {
      path: '/elctr',
      name: 'elctr',
      component: () => import('./views/Electricity/Electricity.vue'),
      meta: {
        title: '电费缴纳'
      }
    },
    {
      path: '/elctrinfo',
      name: 'elctrinfo',
      component: () => import('./views/Electricity/ElectricityInfo.vue'),
      meta: {
        title: '立即缴费'
      }
    },
    {
      path: '/water',
      name: 'water',
      component: () => import('./views/Water/Water.vue'),
      meta: {
        title: '水费缴纳'
      }
    },
    {
      path: '/waterinfo',
      name: 'waterinfo',
      component: () => import('./views/Water/WaterIofo.vue'),
      meta: {
        title: '立即缴费'
      }
    },
    {
      path: '/gas',
      name: 'gas',
      component: () => import('./views/Gas/Gas.vue'),
      meta: {
        title: '燃气缴纳'
      }
    },
    {
      path: '/gasinfo',
      name: 'gasinfo',
      component: () => import('./views/Gas/GasInfo.vue'),
      meta: {
        title: '立即缴费'
      }
    },
    {
      path: '/tenement',
      name: 'tenement',
      component: () => import('./views/Tenement/Tenement.vue'),
      meta: {
        title: '物业缴纳'
      }
    },
    {
      path: '/tenementinfo',
      name: 'tenementinfo',
      component: () => import('./views/Tenement/TenementInfo.vue'),
      meta: {
        title: '立即缴费'
      }
    },
    {
      path: '/broadband',
      name: 'broadband',
      component: () => import('./views/Broadband/Broadband.vue'),
      meta: {
        title: '宽带缴费'
      }
    },
    {
      path: '/broadlist',
      name: 'broadlist',
      component: () => import('./views/Broadband/BroadBList.vue'),
      meta: {
        title: '套餐更换'
      }
    },
    {
      path: '/broadetail',
      name: 'broadetail',
      component: () => import('./views/Broadband/BroadBDeatail.vue'),
      meta: {
        title: '套餐详情'
      }
    },
    {
      path: '/oviStore',
      name: 'oviStore',
      component: () => import('./views/OviStore/OviStore.vue'),
      meta: {
        title: '商铺'
      }
    },
    {
      path: '/maintain',
      name: 'maintain',
      component: () => import('./views/Maintain/Maintain.vue'),
      meta: {
        title: '设施维修'
      }
    },
    {
      path: '/maintaininfo',
      name: 'maintaininfo',
      component: () => import('./views/Maintain/MaintainInfo.vue'),
      meta: {
        title: '确认报修'
      }
    },
    {
      path: '/rental',
      name: 'rental',
      component: () => import('./views/Rental/Rental.vue'),
      meta: {
        title: '车位租用'
      }
    },
    {
      path: '/rentalarea',
      name: 'rentalarea',
      component: () => import('./views/Rental/RentalArea.vue'),
      meta: {
        title: '车位租用'
      }
    },
    {
      path: '/rentalselect',
      name: 'rentalselect',
      component: () => import('./views/Rental/RentalSelect.vue'),
      meta: {
        title: '车位租用'
      }
    },
    {
      path: '/rentalwrite',
      name: 'rentalwrite',
      component: () => import('./views/Rental/RentalWrite.vue'),
      meta: {
        title: '填写订单'
      }
    },
    {
      path: '/rentalverify',
      name: 'rentalverify',
      component: () => import('./views/Rental/RentalVerify.vue'),
      meta: {
        title: '确认订单'
      }
    },
    {
      path: '/mycarport',
      name: 'mycarport',
      component: () => import('./views/MyCarport/MyCarport.vue'),
      meta: {
        title: '我的车位'
      }
    },
    {
      path: '/mycarportno',
      name: 'mycarportno',
      component: () => import('./views/MyCarport/MyCarportNO.vue'),
      meta: {
        title: '我的车位'
      }
    },
    {
      path: '/myrenthistory',
      name: 'myrenthistory',
      component: () => import('./views/MyCarport/MyRentHistory.vue'),
      meta: {
        title: '租用记录'
      }
    },
    {
      path: '/myRentHistoryDetail',
      name: 'myRentHistoryDetail',
      component: () => import('./views/MyCarport/MyRentHistoryDetail.vue'),
      meta: {
        title: '租用记录'
      }
    },
    {
      path: '/ship',
      name: 'ship',
      component: () => import('./views/Ship/Ship.vue'),
      meta: {
        title: '填写表单'
      }
    },
    {
      path: '/shipsuc',
      name: 'shipsuc',
      component: () => import('./views/Ship/ShipSuccess.vue'),
      meta: {
        title: '下单成功'
      }
    },
    {
      path: '/housewifery',
      name: 'housewifery',
      component: () => import('./views/Housewifery/Housewifery.vue'),
      meta: {
        title: '咔咔家政'
      }
    },
    {
      path: '/housedetail',
      name: 'housedetail',
      component: () => import('./views/Housewifery/HouseDetail.vue'),
      meta: {
        title: '咔咔家政'
      }
    },
    {
      path: '/houseorder',
      name: 'houseorder',
      component: () => import('./views/Housewifery/HouseOrder.vue'),
      meta: {
        title: '咔咔家政'
      }
    },
    {
      path: '/housersure',
      name: 'housersure',
      component: () => import('./views/Housewifery/HouseSure.vue'),
      meta: {
        title: '咔咔家政'
      }
    },
    {
      path: '/minebills',
      name: 'minebills',
      component: () => import('./views/MineBills/MineBills.vue'),
      meta: {
        title: '我的账单'
      }
    },
    {
      path: '/minebillsdatail',
      name: 'minebillsdatail',
      component: () => import('./views/MineBills/MineBillsDetail'),
      meta: {
        title: '账单详情'
      }
    },
    {
      path: '/mineindent',
      name: 'mineindent',
      component: () => import('./views/MineIndent/MineIndent.vue'),
      meta: {
        title: '我的快递'
      }
    },
    {
      path:'/mineidentdonedatail',
      name:'mineidentdonedatail',
      component:()=>import('./views/MineIndent/MineIdentDoneDatail.vue'),
      meta:{
        title:'已发件详情'
      }
    },
    {
      path:'/minemaintain',
      name:'minemaintain',
      component:()=>import('./views/MineMaintain/MineMaintain.vue'),
      meta:{
        title:'我的维修'
      }
    },
    {
      path:'/MMDoNo',
      name:'MMDoNo',
      component:()=>import('./views/MineMaintain/MMDoNo.vue'),
      meta:{
        title:'保修详情'
      }
    },
    {
      path:'/MMDoIng',
      name:'MMDoIng',
      component:()=>import('./views/MineMaintain/MMDoIng.vue'),
      meta:{
        title:'保修详情'
      }
    },
    {
      path:'/MMDoDone',
      name:'MMDoDone',
      component:()=>import('./views/MineMaintain/MMDoDone.vue'),
      meta:{
        title:'保修详情'
      }
    },
    {
      path:'/paysuc/:mestip/:mesNum',
      name:'paysuc',
      props:true,
      component:()=>import('./views/PaySuc/pay-suc.vue'),
      meta:{
        title:'支付成功'
      }
    }
  ]
})