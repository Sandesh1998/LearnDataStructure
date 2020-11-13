const numbers=[99,23,48,34,29,45,1,2,4,67,78,26];
function selectionsort(array){
  const length = array.length;
  for(let i = 0; i < length; i++){
    // set current index as a minimum
    let min = i;
    let temp = array [i];
    for(let j = i+1; j < length; j++){
        // update the minimum if current is lower than we  had previous
        if(array[j] < array[min]){
            min = j;
        }
    }
    array[i] =array[min];
    array[min] = temp;
}
return array;
}
selectionsort(numbers);
console.log(numbers)