function isEvenWithoutModulo(num) {
  // your code here
  num = Math.abs(num)
  var remainder = (num/2)-Math.floor((num/2));
  var isEven = false;
  if (remainder === 0)
  {
      var isEven = true;
  }
  return isEven;
}
