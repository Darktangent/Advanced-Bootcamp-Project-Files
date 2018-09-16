setTimeOut(function(){
  console.log("hello world")
},0)

//promise is an obj that represent a task that will be completed in the future

var p1=new Promise(function(resolve, reject){
  //resolve([1,2,3,4])
  // reject('ERROR')
  var num=Math.random()
  if (num<0.5){
    resolve(num)
  }else{
    reject(num)
  }
})
p1.then(function(data){
  console.log('promise p1 resolved with data:', data)
}).catch(function(data){
  console.log("Promise p1 rejected with data:", data)
})
