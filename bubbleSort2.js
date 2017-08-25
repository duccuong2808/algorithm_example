// Sắp xếp từ dưới lên
var array = [676,565,4434,34,322,67,78,1212]
for(var i = array.length - 1; i >=0; i--){
  for(var j = 0; j < i; j++){ // <== Từ dưới lên
    if(array[j] > array[j+1]){
      var temp = array[j+1]
      array[j+1] = array[j]
      array[j] = temp
    }
  }
}
console.log(array)