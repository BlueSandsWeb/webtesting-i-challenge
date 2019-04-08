const enhancer = require('./enhancer.js');

describe('repair()', () => {

  it('should return item with 100 durability', () => {
    expect(enhancer.repair({ sword: "excaliber", durability: 80, enhancement: 10 })).toMatchObject({ sword: "excaliber", durability: 100, enhancement: 10 })
    expect(enhancer.repair({ sword: "excaliber", durability: 0, enhancement: 10 })).toMatchObject({ sword: "excaliber", durability: 100, enhancement: 10 })
    expect(enhancer.repair({ sword: "excaliber", durability: -10, enhancement: 10 })).toMatchObject({ sword: "excaliber", durability: 100, enhancement: 10 })
  })

})

describe('succeed()', () => {
  it('should return item with 100 durability', () => {
    expect(enhancer.succeed({ sword: "excaliber", durability: 100, enhancement: 10 })).toMatchObject({ sword: "excaliber", durability: 100, enhancement: 11 })
    expect(enhancer.succeed({ sword: "excaliber", durability: 100, enhancement: 0 })).toMatchObject({ sword: "excaliber", durability: 100, enhancement: 1 })
    expect(enhancer.succeed({ sword: "excaliber", durability: 100, enhancement: -10 })).toMatchObject({ sword: "excaliber", durability: 100, enhancement: 0 })
    expect(enhancer.succeed({ sword: "excaliber", durability: 100, enhancement: 20 })).toMatchObject({ sword: "excaliber", durability: 100, enhancement: 20 })
    expect(enhancer.succeed({ sword: "excaliber", durability: 100, enhancement: 45 })).toMatchObject({ sword: "excaliber", durability: 100, enhancement: 20 })
    expect(enhancer.succeed({ sword: "excaliber", durability: 100, enhancement: 'hello' })).toMatchObject({ sword: "excaliber", durability: 100, enhancement: 0 })
    expect(enhancer.succeed({ sword: "excaliber", durability: 100, enhancement: true })).toMatchObject({ sword: "excaliber", durability: 100, enhancement: 0 })
    expect(enhancer.succeed({ sword: "excaliber", durability: 100, enhancement: false })).toMatchObject({ sword: "excaliber", durability: 100, enhancement: 0 })
    expect(enhancer.succeed({ sword: "excaliber", durability: 100, enhancement: '10' })).toMatchObject({ sword: "excaliber", durability: 100, enhancement: 0 })
  })
})

describe('fail()', () => {

  it('should return item with 100 durability', () => {
    expect(enhancer.fail({ sword: "excaliber", durability: 100, enhancement: 10 })).toMatchObject({ sword: "excaliber", durability: 95, enhancement: 10 })
    expect(enhancer.fail({ sword: "excaliber", durability: 100, enhancement: 0 })).toMatchObject({ sword: "excaliber", durability: 95, enhancement: 0 })

    expect(enhancer.fail({ sword: "excaliber", durability: 100, enhancement: 20 })).toMatchObject({ sword: "excaliber", durability: 90, enhancement: 19 })
    expect(enhancer.fail({ sword: "excaliber", durability: 100, enhancement: 17 })).toMatchObject({ sword: "excaliber", durability: 90, enhancement: 16 })

    expect(enhancer.fail({ sword: "excaliber", durability: 100, enhancement: -20 })).toMatchObject({ sword: "excaliber", durability: 95, enhancement: 0 })
    expect(enhancer.fail({ sword: "excaliber", durability: 100, enhancement: 25 })).toMatchObject({ sword: "excaliber", durability: 90, enhancement: 19 })
    expect(enhancer.fail({ sword: "excaliber", durability: 100, enhancement: 'hello' })).toMatchObject({ sword: "excaliber", durability: 0, enhancement: 0 })
    expect(enhancer.fail({ sword: "excaliber", durability: 100, enhancement: true })).toMatchObject({ sword: "excaliber", durability: 0, enhancement: 0 })

    expect(enhancer.fail({ sword: "excaliber", durability: "hello", enhancement: 0 })).toMatchObject({ sword: "excaliber", durability: 0, enhancement: 0 })
  })

})

describe('get()', () => {
  it('should should return a new item with name having "name +<enhancement-level>"', () => {
    expect(enhancer.get({ sword: "excaliber", durability: 100, enhancement: 1 })).toMatchObject({ sword: "excaliber", durability: 100, enhancement: 1 })
  })
})