/**
 * 检查所提供的日期是否为工作日
 * @param date
 * @returns boolean
 */
const isWeekday = (date: Date): boolean => date?.getDay?.() % 6 !== 0

/**
 * 从一个日期获取时间
 * @param date
 * @returns string
 */
const timeFromDate = (date: Date): string =>
  date?.toTimeString?.()?.slice?.(0, 8)

export default {
  isWeekday,
  timeFromDate,
}
