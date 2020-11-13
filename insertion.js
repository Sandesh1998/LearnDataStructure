const numbers=[99,23,48,34,29,45,1,2,4,67,78,26];
function insertionsort(array){
let length = array.length;
for(let i = 0; i < length; i++){
  if(array[i] < array[0]){
    //array [0]= first index 
    //move numbers to the first poisition
    array.unshift(array.splice(i,1)[0]);
  }
  else{
    //find where numbers should go
for (let j=1; j<length; j++){
  if(array[i]> array[j-1] && array[i] < array[j] ){
//move numbers to the right spot
array.splice(j,0,array.splice(i,1)[0]);
  }
}
  }
}
}
insertionsort(numbers)
console.log(numbers)