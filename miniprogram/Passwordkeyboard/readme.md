# Passwordkeyboard组件

## 当前组件状态

- 状态：完成

- 未完成：优化阶段，动画优化

## 参考项目 

无

#### 样式

![Passwordkeyboard](https://raw.githubusercontent.com/SevenDreamYang/individual_Component_Warehouse/master/wechat/wechat-img-macdown/Passwordkeyboard.png)

#### 需求参数

|    参数     |     说明     |  类型   | 必传 | 备注       |
| :---------: | :----------: | :-----: | ---- | ---------- |
| valueLength |     长度     | Number  | 否   | 默认为6    |
|  anonymous  |     是否     | Boolean | 否   | UI显示为 * |
|   isShow    |     显示     | Boolean | 否   | 是         |
|    title    |     标题     | String  | 是   |            |
|   zIndex    | z-index 层级 | Number  | 否   | 默认为50   |

#### 事件

| 事件      | 值         | 说明 | 备注                       |
| --------- | ---------- | ---- | -------------------------- |
| onCancel  | 取消时触发 | 取消 |                            |
| onConfirm | 确认时触发 | 确认 | {’value‘:值 ‘length‘:长度} |

#### 下部开发

- [ ] 数字键盘 确定异步

