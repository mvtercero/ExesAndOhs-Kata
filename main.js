

function exesAndOhs(text) {
  let numberOfX = 0;
  let numberOfO = 0;

  const arrayText = Array.from(text)

  arrayText.forEach(element => {
    if (element === 'x') {
      numberOfX++
    } else if (element === 'o') {
      numberOfO++
    }
  })

  return numberOfX === numberOfO

}

module.exports = { exesAndOhs } 