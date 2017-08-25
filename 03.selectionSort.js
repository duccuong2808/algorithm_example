var array = [676,565,34,322,67,78,4434,1212]
var minArray, temp
for(var i = 0; i <= array.length - 1; i++){
  minArray = array[i]
  
  for(var j = i + 1; j <= array.length - 1; j++){
    if(minArray > array[j]){
      // Hoán đổi array[i] và array[j]
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
      // Sau khi hoán đổi, cần gắn lại biến bé nhất (minArray)
      minArray = array[i]
    }
  }
}
console.log(array)
