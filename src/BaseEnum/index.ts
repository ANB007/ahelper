export type EnumDataItem = [string, string | number, string]
const filterList = ['constructor'] // 不拦截的属性列表

/** technical support by ziming && jianhao*/

/**
 * 常量枚举类，传入多组 [key, value, text] 数据
 * 就可以通过 value 获得 text，通过 key 获得 value
 * 无法通过 index 来拿 某一组数据，可以使用迭代器，length 等
 *
 * @param data - 元数据 key必须使用大蛇命名法、value 为数字或者 string code、text为中文描述
 * @returns data
 *
 * @example
 * ```ts
 * const YES_OR_NO = new EnumData([
 *   ['YES', 1, '是'],
 *   ['NO', 0, '否'],
 * ])
 * console.log(YES_OR_NO.YES === 1) // true
 * console.log(YES_OR_NO['1']) // 是
 * console.log('YES' in YES_OR_NO) // false
 * console.log('forEach' in YES_OR_NO) // true
 * YES_OR_NO.map([key, value, text] => ({
 *   key,
 *   value,
 *   text,
 * }))
 * ```
 *
 * @beta
 * @author ziming
 */
export default class EnumData {
  [key: string]: any

  constructor(data: EnumDataItem[]) {
    const pattern = /^[A-Z]+([A-Z0-9_]*[A-Z0-9])*$/
    data.forEach(([key, value, text]) => {
      if (!pattern.test(key)) {
        // 规定key必须使用大蛇命名法
        throw new Error(
          'Please use the Big Snake Case for the key, such as JIAN_HAO'
        )
      }
      if (key in this || (value in this && typeof this[value] !== 'object')) {
        // key/value重复报错
        throw new Error('The key and value have the same name')
      }
      Object.defineProperty(this, key, {
        // 定义 key 访问 value
        value,
      })
      Object.defineProperty(this, value, {
        // 定义 value 访问 text
        value: text,
      })
    })
    Object.defineProperty(this, 'length', {
      // 定义 value 访问 text
      value: data.length,
    })

    // Reflect.ownKeys更好，但是只支持到chrome v49, getOwnPropertySymbols支持到chrome v38
    const ArrayMethodNames = [
      'toString',
      'valueOf',
      ...Object.getOwnPropertyNames(Array.prototype),
      ...Object.getOwnPropertySymbols(Array.prototype),
    ]
    ArrayMethodNames.forEach((propKey) => {
      // 拦截所有数组方法
      if (
        typeof Array.prototype[propKey] === 'function' &&
        !filterList.includes(String(propKey))
      ) {
        Object.defineProperty(EnumData.prototype, propKey, {
          configurable: true,
          value: Array.prototype[propKey].bind(data),
        })
      }
    })
  }
}
