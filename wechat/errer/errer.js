// component/stepper/stepper.js
Component({
  properties: {
    type: {
      type: Number,
      value: 0
    },
    title: {
      type: String,
      value: '错误'
    }
  },
  data: {
    images: [
      './img/wamhluoyichang.png', 
      './img/asset/images/zanwuxiaoxi.png',
      './img/asset/images/zanwushuju.png', 
      './img/asset/images/zanwujieguo.png',
      './img/asset/images/kongjinhuoche.png',
      './img/asset/images/loading.gif'
    ],
  },
  methods: {
    
  }
})