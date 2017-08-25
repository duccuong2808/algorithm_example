var array = [676,565,4434,34,322,67,78,1212]
var t,j;
for(var i = 1; i < array.length; i++){
  j = i - 1;
  t = array[i]
  while(t < array[j] && j >= 0){
    array[j+1] = array[j];
    j--;
  }
  array[j+1] = t
  console.log(array)  
}