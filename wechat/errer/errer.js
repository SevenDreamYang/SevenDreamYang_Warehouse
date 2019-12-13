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
      '../../asset/images/wamhluoyichang.png', 
      '../../asset/images/zanwuxiaoxi.png',
      '../../asset/images/zanwushuju.png', 
      '../../asset/images/zanwujieguo.png',
      '../../asset/images/kongjinhuoche.png',
      '../../asset/images/loading.gif'
    ],
  },
  methods: {
    
  }
})