

function exesAndOhs(text) {
  let accumulatorX = 0;
  let accumulatorO = 0;

  for (let index = 0; index < text.length; index++) {
    const element = text[index];
    if (element === 'x') {
      accumulatorX++
    } else if (element === 'o') {
      accumulatorO++
    }
    console.log(accumulatorX)
    console.log(accumulatorO)
  }

  if (accumulatorX === accumulatorO) {
    return true
  }
  return false
}

module.exports = { exesAndOhs } 