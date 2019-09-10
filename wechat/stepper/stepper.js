// component/stepper/stepper.js
Component({
  properties: {
    min: {
      type: Number,
      value: 1
    },
    max: {
      type: Number,
      value: 9999
    },
    num:{
      type: Number,
      value: 1
    }
  },
  data: {
    // 这里是一些组件内部数据
    // 使用data数据对象设置样式名 
    minusStatus: 'disabled'
  },
  methods: {
    // 这里放置自定义方法
    /* 点击减号 */
    bindMinus: function () {
      var num = this.data.num;
      var min = this.data.min;
      if (num > min) {
        num--;
      }
      this.setData({
        num: num
      });
      this.triggerEvent('change', { num:num });
    },
    /* 点击加号 */
    bindPlus: function () {
      var num = this.data.num;
      var max = this.data.max;
      if (num < max) {
        num++;
      }
      this.setData({
        num: num
      });
      this.triggerEvent('change', { num:num });
    },
    /* 输入框事件 */
    bindManual: function (e) {
      var num = e.detail.value;
      var max = this.data.max;
      if(num > max || num === 0 || num == ""){
        this.setData({
          num: this.data.num
        });
        this.triggerEvent('change', { num: this.data.num });
      }else{
        // 将数值与状态写回 
        this.setData({
          num: num
        });
        this.triggerEvent('change', { num:num });
      }
    }
  }
})