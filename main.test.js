
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

const { exesAndOhs } = require("./main.js")

describe('Exes and Ohs', () => {
  it('checks if the string has 1o and 1x', () => {
    const result = exesAndOhs('xo')
    expect(result).toEqual(true)
  })
})