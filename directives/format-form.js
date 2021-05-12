/**
 * 格式化价格
 * 适合范围：element-ui
 */
export const formatMoney = {
  name: 'formatMoney',
  bind(el, binding, vnode) {
    const element = el.getElementsByTagName('input')[0];
    if (!element.value) {
      vnode.data.model.callback('0.00');
    }
  },
  update: function (el, binding, vnode) {
    const element = el.getElementsByTagName('input')[0];
    element.addEventListener('blur', function () {
      const value = element.value;
      const handleValue = parseFloat(value);
      if (isNaN(handleValue)) {
        vnode.data.model.callback('0.00');
      } else {
        vnode.data.model.callback(handleValue.toFixed(2));
      }
    });
  },
};

/**
 * 格式化百分比
 * 适合范围：element-ui
 */
export const formatPercentage = {
  name: 'formatPercentage',
  bind(el, binding, vnode) {
    const element = el.getElementsByTagName('input')[0];
    if (!element.value) {
      vnode.data.model.callback('0');
    }
  },
  update: function (el, binding, vnode) {
    const element = el.getElementsByTagName('input')[0];
    element.addEventListener('blur', function () {
      const value = element.value;
      const handleValue = parseFloat(value);
      if (isNaN(handleValue)) {
        vnode.data.model.callback(0);
      } else {
        if (handleValue > 100 || handleValue < 0) {
          const number = handleValue > 100 ? 100 : 0;
          vnode.data.model.callback(number);
        } else {
          vnode.data.model.callback(handleValue);
        }
      }
    });
  },
};

/**
 * 格式化数组
 * 适合范围：element-ui
 * @param {boolean} abs 是否开启绝对值
 * @param {boolean} decimal 是否开启开启小点点
 * @param {number} toFixed 保留几位小睡点  decimal开启有效
 */
export const formatNumber = {
  name: 'formatNumber',
  bind(el, binding, vnode) {
    const element = el.getElementsByTagName('input')[0];
    if (!element.value) {
      vnode.data.model.callback(0);
    }
  },
  update: function (el, binding, vnode) {
    const element = el.getElementsByTagName('input')[0];
    element.addEventListener('blur', function () {
      const value = element.value;
      const handleValue = parseFloat(value);
      if (isNaN(handleValue)) {
        vnode.data.model.callback(0);
      } else {
        // 声明默认设置
        const defaultConfig = { abs: false, decimal: false, toFixed: 2 };
        // 处理接收数据
        const afferentConfig = Object.prototype.toString.call(binding.value) === '[object Object]' ? binding.value : {};
        const config = Object.assign({}, defaultConfig, afferentConfig);
        // 拿出设置
        const { abs, decimal, toFixed } = config;
        // 是否开启绝对值校验
        const val_abs = abs ? Math.abs(handleValue) : handleValue;
        // 是否开启小 点及小数点处理
        const finalVal = decimal ? parseFloat(val_abs.toFixed(isNaN(toFixed) ? 2 : toFixed)) : parseInt(val_abs);
        vnode.data.model.callback(finalVal);
      }
    });
  },
};
