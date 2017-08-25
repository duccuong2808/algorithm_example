function initFibonacy(maxNumber) {
  array = [0, 1];
  var i = array.length;
  while ((array[i] = array[i - 2] + array[i - 1]) <= maxNumber) {
    i++;
  }
  return array[i-1] == maxNumber
}
console.log(initFibonacy(15))