/**
 * 返回一个随机的布尔值
 * @returns boolean
 */
const randomBoolean = (): boolean => Math.random() >= 0.5

/**
 * 检查一个数字是偶数还是奇数
 * @param num
 * @returns boolean
 */
const isEven = (num: number): boolean => num % 2 === 0

export default {
  randomBoolean,
  isEven,
}
