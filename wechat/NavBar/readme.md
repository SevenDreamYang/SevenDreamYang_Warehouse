# NavBar 组件

## 当前组件状态

- 状态：完成

- 未完成：优化阶段

## 参考项目 

无

#### 样式

<img src="https://github.com/SevenDreamYang/individual_Component_Warehouse/blob/master/wechat/wechat-img-macdown/nav.png" alt="微信图片_20191229135647" style="zoom:75%;" />

#### 需求参数

|        参数         |         说明         |    类型     | 必传 | 备注         |
| :-----------------: | :------------------: | :---------: | ---- | ------------ |
|        title        |         标题         |   String    | 是   |              |
|      showHome       |     是否显示HOME     |   Boolean   | 否   |              |
|    isCustomRight    | 是否使用默认跳转页面 |   String    | 否   |              |
|   backgroundColor   |       背景颜色       | 16进制&rbga | 否   |              |
| menubackgroundColor |       按钮颜色       | 16进制&rbga | 否   |              |
|      fontColor      |       字体颜色       |   16进制    | 否   |              |
|        icon         |         icon         |   String    | 否   | 建议iconfont |

#### 事件

| 事件     | 说明             | 备注                    |
| -------- | ---------------- | ----------------------- |
| _onRight | 右侧按钮点击事件 | 可通过isCustomRight控制 |
| _onLeft  | 左侧按钮点击事件 |                         |

#### 其他说明

icon 最好为 iconfont 

#### 