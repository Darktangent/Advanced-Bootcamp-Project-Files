var arr=[1,2,3,4,5,6]
function double(arr){
  for(var i=0; i<arr.length; i++){
    console.log(arr[1]*2)
  }
}
double(arr)

//using forEach
var arr1=[1,2,3,4,5,6,7]

arr1.forEach(function(number){
  console.log(number*2)
})
//with all callback params
var myString=["my", "forEach", "example"]
var result=""
myString.forEach(function(currElem,currIndex,string){
if (string.length-1 !== currIndex){
  result+= currElem +" "
} else {
  result+=currElem +"!!!"
}

})
//implement forEach

function forEach(arr,callback){
  for (var i=0;i<arr.length; arr++){
    callback(arr[i],i,arr)
  }
}
