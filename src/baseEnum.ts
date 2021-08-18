/* eslint-disable no-console */
import Proxy from 'es6-proxy-polyfill'

export default class BaseEnum {
  constructor(data) {
    const keyMap = {}
    const valueMap = {}

    data.forEach(([key, value, text]) => {
      keyMap[key] = value

      valueMap[value] = text
    })

    const ans = new Proxy(data, {
      get(target, propKey) {
        if (keyMap[propKey] || keyMap[propKey] === 0) {
          return keyMap[propKey]
        }
        if (valueMap[propKey] || valueMap[propKey] === 0) {
          return valueMap[propKey]
        }
        if (Array.prototype.hasOwnProperty(propKey)) {
          if (typeof Array.prototype[propKey] === 'function') {
            return Array.prototype[propKey].bind(target)
          }

          return target[propKey]
        }
        return null
      },
      set(target) {
        console.warn('不可变对象，禁止设置值')
        return target
      },
    })
    return ans
  }
}
