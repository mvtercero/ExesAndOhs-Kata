

function exesAndOhs(text) {

  const arrayText = Array.from(text)

  let numberOfX = arrayText
    .filter(element => element === 'x')

  let numberOfO = arrayText
    .filter(element => element === 'o')

  return numberOfX.length === numberOfO.length

}

module.exports = { exesAndOhs } 