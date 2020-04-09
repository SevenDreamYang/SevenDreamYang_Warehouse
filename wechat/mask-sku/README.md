# sku 组件
## 当前组件状态

- 状态：半成品

- 未完成：逻辑优化，价格变动等

## 参考项目 

花+

#### 样式

![sku](https://raw.githubusercontent.com/SevenDreamYang/individual_Component_Warehouse/master/wechat/wechat-img-macdown/sku1.png)

#### 需求参数

|     参数     |     说明     |  类型   | 必传 |
| :----------: | :----------: | :-----: | ---- |
|     sku      |   所需数据   | Object  | 是   |
|  btnBgColor  | 按钮背景颜色 | String  | 否   |
| btnFontColor | 按钮背景颜色 | String  | 否   |
|    isShow    |   弹出控制   | Boolean | 是   |

#### 事件

| 事件      | 说明         |
| --------- | ------------ |
| retrunSku | 返回所选数据 |



#### sku 参数

```json
{
	"img": "/images/des/8.jpg",
	"price": "￥300",
	"yprice": "$39",
	"option": [{
		"title": "产品信息",
		"option": ["画好月圆", "画好月圆"]
	}, {
		"title": "定几个月",
		"option": ["1个月", "2个月"]
	}],
	"addr": "山东省,山东省,山东省"
}
```

