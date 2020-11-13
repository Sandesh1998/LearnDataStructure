const numbers=[99,23,48,34,29,45,1,2,4,67,78,26]
function bubblesort(array){
  const  length = array.length;
  for (let x=0; x < length ; x++){
    for (let j = 0; j < length ; j++){
      if(array[j] > array[j+1]){
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
}
bubblesort(numbers);
console.log(numbers);
