import global from '../../utils/global';
Component({
  properties: {
     isShow:{
       type:Boolean,
       value:false,
       observer: function(newVal, oldVal) {
        this.setData({
          isSureCss:newVal
        })
      }
     },
     sku:{
       type:Object,
       value:{}
     },
     btnBgColor:{
      type:String,
      value:'#ff5151'
     },
     btnFontColor:{
      type:String,
      value:'#333333'
     },
  },
  /*
   * 页面的初始数据
   */
  data: {
    imgUrl:global.imgUrls,
    isSureCss:true,
    optionSt:'',
    optionList:[],
    num:0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  methods: {
    stopScroll(){
      return false;
    },
    isSure:function(){
       this.triggerEvent('retrunSku', {sku:{
         optionList:this.data.optionList,
         num:this.data.num
       }});
      this.setData({
        isSureCss:false
      })
      setTimeout(()=>{
        this.setData({
          isShow:false,
          optionSt:"",
          optionList:[],
          num:0
        })
      },500)
    },
    getNum(e){
      this.setData({
        num:e.detail.num
      })
    },
    onOption(e){
      let optionData = e.currentTarget.dataset;
      if(optionData.istrue == true){
        return false;
      }
      let data = this.data.optionList;
      data[optionData.opindex] = optionData
      let optionStArr = [];
      data.forEach(item => {
          optionStArr.push(item.option) 
      })
      let optionSt = optionStArr.join(' | ')
      this.setData({
        optionList:data,
        optionSt:optionSt
      })
    },
  }
})