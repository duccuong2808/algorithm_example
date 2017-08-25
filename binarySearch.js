function binarySearch(array, x, left = 0, right = array.length - 1) {
  middle = parseInt((left + right) / 2)
  if (x == array[middle]) {
    return middle
  }
  return x < array[middle] ? binarySearch(array, x, left, middle - 1) :
    binarySearch(array, x, middle + 1, right)
}

array = [1, 3, 5, 8, 45, 232, 6767, 332, 678, 2323]
console.log(binarySearch(array, 332))
// O(log n)} - độ phức tạp của thuật toán