shuffle = function (array) {
  var j, temp;
  for(var i = 0; i < array.length; i++){
    j = Math.floor(Math.random() * i)
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

isSorted = function (v) {
  for (var i = 1; i < v.length; i++) {
    if (v[i - 1] > v[i]) {
      return false;
    }
  }
  return true;
}

bogosort = function (v) {
  var sorted = false;
  while (!sorted) {
    v = shuffle(v);
    sorted = isSorted(v);
  }
  return v;
}
var array = [676, 565, 4434, 34, 322, 67, 78, 1212]
console.log(bogosort(array))