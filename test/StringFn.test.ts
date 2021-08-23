import { StringFn } from '../src'

describe('StringFn', () => {
  test('reverse', () => {
    expect(StringFn.reverse('ni hao lalala!')).toBe('!alalal oah in')
    expect(StringFn.reverse('123 45 6')).toBe('6 54 321')
    expect(StringFn.reverse('你好啊  我喜欢你～')).toBe('～你欢喜我  啊好你')
  })
})
