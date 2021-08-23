import { DateFn } from '../src'

describe('DateFn', () => {
  test('isWeekday', () => {
    expect(DateFn.isWeekday(new Date())).toBe(true)
  })

  test('timeFromDate', () => {
    expect(DateFn.timeFromDate(new Date('2021-08-23 11:59:30'))).toBe(
      '11:59:30'
    )
  })
})
