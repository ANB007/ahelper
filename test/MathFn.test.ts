import { MathFn } from '../src'

describe('MathFn', () => {
  expect.extend({
    toBeBoolean: function (received) {
      if (typeof received === 'boolean') {
        return {
          message: () => '',
          pass: true,
        }
      }

      return {
        message: () => 'expected return value type is boolean',
        pass: false,
      }
    },
  })

  test('randomBoolean', () => {
    ;(expect(MathFn.randomBoolean()) as any).toBeBoolean()
  })

  test('isEven', () => {
    expect(MathFn.isEven(10)).toBeTruthy()
    expect(MathFn.isEven(9)).toBeFalsy()
    expect(MathFn.isEven(2)).toBeTruthy()
    expect(MathFn.isEven(0)).toBeTruthy()
  })
})
