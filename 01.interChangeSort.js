var array = [676, 565, 34, 322, 67, 78, 4434, 1212]
for (let i = 0; i <= array.length - 2; i++) {
  for (let j = i + 1; j <= array.length - 1; j++) {
    if (array[i] > array[j]) {
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }
}
console.log(array)