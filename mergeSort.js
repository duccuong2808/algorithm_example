var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function mergeSort(arr) {
  if (arr.length < 2)
    return arr;

  var middle = parseInt(arr.length / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      // lấy giá trị đầu tiên của left, truyền vào result, đồng thời, xóa phần tử đầu tiên của left
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length > 0)
    result.push(left.shift());

  while (right.length > 0)
    result.push(right.shift());

  return result;
}

console.log(mergeSort(a));