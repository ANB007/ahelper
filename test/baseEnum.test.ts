import { BaseEnum } from '../src'

describe('create BaseEnum & get [key, value, label]', () => {
  const testEnum = new BaseEnum([
    ['k1', 0, 'kk1'],
    ['k2', '1', 'kk2'],
    ['k3', null, 'kk3'],
    ['k4', undefined, 'kk4'],
    ['k5'],
    ['k6', '6', undefined],
  ]) as any

  const enumMap = testEnum.map(([key, value, label]) => ({
    key,
    value,
    label,
  }))

  test('create BaseEnum & check value - label', () => {
    expect(testEnum.k1).toBe(0)
    expect(testEnum[0]).toBe('kk1')
    expect(testEnum.k2).toBe('1')
    expect(testEnum['1']).toBe('kk2')
    expect(testEnum.k3).toBeNull()
    expect(testEnum[testEnum.k3]).toBe('kk3')
    expect(testEnum.k4).toBeUndefined()
    expect(testEnum[testEnum.k4]).toBeUndefined()
    expect(testEnum.k5).toBeUndefined()
    expect(testEnum[testEnum.k5]).toBeUndefined()
    expect(testEnum.k6).toBe('6')
    expect(testEnum['6']).toBeUndefined()

    expect(testEnum.length).toBe(6)
  })

  test('check enumMap', () => {
    expect(enumMap).toMatchObject([
      { key: 'k1', label: 'kk1', value: 0 },
      { key: 'k2', label: 'kk2', value: '1' },
      { key: 'k3', label: 'kk3', value: null },
      { key: 'k4', label: 'kk4', value: undefined },
      { key: 'k5', label: undefined, value: undefined },
      { key: 'k6', label: undefined, value: '6' },
    ])
  })

  test('test set Enum & throw Error', () => {
    expect(() => {
      testEnum[0] = ['k0', 0, 'kkk0']
    }).toThrow('不可变对象，禁止设置值')
  })

  test('test set Error Enum', () => {
    const t1Enum = new BaseEnum({ key: 'k1', value: 1, label: 'kkk1' })

    expect(t1Enum).toMatchObject([])
  })
})
