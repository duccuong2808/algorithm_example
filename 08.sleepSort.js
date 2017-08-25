var array = [1,2,3,9,5,6,676, 565, 4434, 34, 322, 67, 78, 1212], array_clone = []
var max = array[0];
for(let i = 0; i < array.length; i++){
  setTimeout(function(){
    array_clone.push(array[i])
  }, array[i])
  max = max > array[i] ? max : array[i]
}

setTimeout(function(){
  console.log(array_clone)
}, max + 10)
