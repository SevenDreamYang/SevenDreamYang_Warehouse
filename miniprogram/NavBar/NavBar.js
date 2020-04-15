// component/stepper/stepper.js
Component({
  properties: {
    title:String,
    showHome:{
      type:Boolean,
      value:true
    },
    isCustomRight:{
      type:Boolean,
      value:false
    },
    backgroundColor:{
      type:String,
      value:'#fff'
    },
    menubackgroundColor:{
      type:String,
      value:'#fff'
    },
    fontColor:{
      type:String,
      value:'#333'
    },
    icon:{
      type:String,
      value:'iconhome1'
    }
  },
  data: {
    menuheight:32,
    navHeight:44,
    navTop:20
  },
  lifetimes:{
    attached:function () {
      let menuButtonObject = wx.getMenuButtonBoundingClientRect();
        wx.getSystemInfo({
          success:(res)=>{
          let statusBarHeight = res.statusBarHeight
          let navTop = menuButtonObject.top
          let navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight)*2;
          this.setData({
            navHeight:navHeight,
            navTop:navTop,
            menuheight:menuButtonObject.height
          })
        }
      })
      this.setData({
        navheight:menuButtonObject.height
      })
    },
  },
  attached(){
    console.log(111);
  },
  methods: {
    _onRight:function(e){
      if(!this.data.isCustomRight){
        wx.switchTab({
          url: '/pages/index/index',
        })
      }else{
        this.triggerEvent('onRight', e );
      }
    },
    _onLeft:function(e){
      this.triggerEvent('onLeft', e );
    }
  }
})