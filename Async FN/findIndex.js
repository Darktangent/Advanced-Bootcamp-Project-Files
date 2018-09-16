//describe and use findIndex
function findIndex(arr, callback){
  //findIndex code to be implemented
  for (var i==0; i<arr.length; i++){
    if(callback(arr[i],i,arr)){
        return i;
    }
  }
  return -1
}
