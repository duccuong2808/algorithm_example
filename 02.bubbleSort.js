// Sắp xếp từ trên xuống
var array = [676,565,4434,34,322,67,78,1212]
for(var i = 0; i < array.length; i++){
  var has_swap = 0
  for(var j = array.length - 1; j > i; j--){ // <== từ trên xuống
    if(array[j] < array[j - 1]){
      var temp = array[j - 1]
      array[j - 1] = array[j]
      array[j] = temp

      has_swap = 1
    }
  }
  if(has_swap == 0){
    break
  }
}
console.log(array)