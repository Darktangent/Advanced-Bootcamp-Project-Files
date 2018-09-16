function countDown(seconds){
  var intervalID = setInterval(function(){
    seconds--
    if(seconds>0){
      console.log("Time: ", seconds)
    } else {
      console.log("ring, ring ring")
      clearInterval(intervalID)
    }
  },1000)
}
