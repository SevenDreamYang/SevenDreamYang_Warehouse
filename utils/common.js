/**
 * @function 查询目标源
 * @param {any} targetObject 目标对象
 * @param {String|Number} targetStr 目标地址
 * @param {any} defaultValue 目标
 * @returns {any}
 */
export function takeAt(targetObject, targetStr, defaultValue = undefined) {
  // 判断是不是对象或者对象 如果不是就返回目标对象
  if (!(targetObject instanceof Object)) return targetObject;
  // 声明方法是不是合法目标地址
  const isDef = (value) => value !== undefined && value !== null && value !== '' && isNaN(NaN);
  // 判断目标地址是不是数字
  const targetIsNumber = typeof targetStr === 'number';
  // 如果不是字符串或者不是数字就返回默认值或者undefined
  if ((!(targetStr instanceof String) || !targetIsNumber) && !isDef(targetStr)) return defaultValue;
  // 获取目标对象
  let target = targetObject;
  // 转换地址目标地址
  const handleStr = targetIsNumber ? targetStr.toString() : targetStr;
  // 抹平格式格式转数组
  const fieldSplit = handleStr.replace('[', '.').replace(']', '').split('.');
  // 循环查找
  for (let i = 0; i < fieldSplit.length; i++) {
    const field = fieldSplit[i];
    if (target[field]) {
      target = target[field];
    } else {
      return defaultValue;
    }
  }
  return target;
}
