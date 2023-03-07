const bmiCalc = (weight = 150, height = 1.85) =>Math.round( weight / Math.pow(height, 2), 2);

module.exports = {
  bmiCalc
}