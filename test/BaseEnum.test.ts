import { BaseEnum } from '../src'

describe('create BaseEnum & get [key, value, label]', () => {
  const testEnum = new BaseEnum([
    ['KK1', 0, 'kk1'],
    ['KK2', '1', 'kk2'],
  ]) as any

  const enumMap = testEnum.map(([key, value, label]) => ({
    key,
    value,
    label,
  }))

  test('create BaseEnum & check value - label', () => {
    expect(testEnum.KK1).toBe(0)
    expect(testEnum[0]).toBe('kk1')
    expect(testEnum.KK2).toBe('1')
    expect(testEnum['1']).toBe('kk2')

    expect(testEnum.length).toBe(2)
  })

  test('check enumMap', () => {
    expect(enumMap).toMatchObject([
      { key: 'KK1', label: 'kk1', value: 0 },
      { key: 'KK2', label: 'kk2', value: '1' },
    ])
  })

  test('Please use the Big Snake Case for the key, such as JIAN_HAO', () => {
    expect(() => {
      new BaseEnum([
        ['kk1', 0, 'kk1'],
        ['KK2', '1', 'kk2'],
      ]) as any
    }).toThrow('Please use the Big Snake Case for the key, such as JIAN_HAO')
  })

  test('The key and value have the same name', () => {
    expect(() => {
      new BaseEnum([
        ['KK1', 0, 'kk1'],
        ['KK1', '1', 'kk2'],
      ]) as any
    }).toThrow('The key and value have the same name')
  })
})
