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

//setTimeOut with Promise

var promise= new Promise (function(resolve,reject){
  setTimeOut(function(){
    var randomInt=Math.floor(Math.random()*10)
    resolve(randomInt)
  }, 4000)
})
promise.then(function(data){
  console.log("Random int passed to resolve", data)
})

//promise chaining

var promise=new Promise(function(resolve,reject){
  resolve(5)

})
promise.then(function(data){
  return data *2
}).then(function(data){
  return data +20
}).then (function(data){
  console.log(data)
})
//more promises
var counter=0;
function incCounter(){
  counter ++
  console.log("Counter: ", counter)
}
function runLater(callback,time){
  var p=New Promise(resolve,reject){
    setTimeOut(function(){
      var res=callback
      resolve(res)
    }
  })
  return p
}
runlater(incCounter, 1000).then(function(){
return runLater(incCounter,2000)

})
