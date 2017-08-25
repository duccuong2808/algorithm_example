var array = [2,6,5,7,3,8,9,1]
console.log(array)
quickSort(array, 0, array.length - 1);

function quickSort(arr, left, right) {
	var i = left;
	var j = right;
	var tmp;
	pivot_idx = (left + right) / 2;
	var pivot = arr[pivot_idx.toFixed()];

	/* partition */
	while (i <= j) {
		while (arr[i] < pivot)
			i++;
		while (arr[j] > pivot)
			j--;
		if (i <= j) {
			tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
			i++;
			j--;
		}
	}
	
	/* recursion */
	if (left < j)
		quickSort(arr, left, j);
	if (i < right)
		quickSort(arr, i, right);
	return arr;
}