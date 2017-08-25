var array = [676,565,34,322,67,78,4434,1212]
for(var i = 0; i <= array.length - 1; i++){
  var min = i;
  for(var j = i + 1; j <= array.length - 1; j++){
    if(array[min] > array[j]){
      min = j
    }
  }
  if(min != i){
    temp = array[i]
    array[i] = array[min]
    array[min] = temp
  }
}
console.log(array)
