//capitalize
function upperCaseFirstLetter (word){
  return word[0].toUpperCase+word.slice(1)
}
function upperCaseWords(sentence) {

  var words=sentence.split(" ")
  for (var i=0; i<words.length;i++){
    words[i]= upperCaseFirstLetter(words[i])
  }
  return words.join (" ")
}
//Use this
upperCaseWords("a")
//Use this
function capital_letter(str)
{
    str = str.split(" ");

    for (var i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

function capitalize(str) {
let arr = str.split(' ');
let newarr = [];
arr.forEach(word => {
newarr.push(word[0].toUpperCase() + word.slice(1));
});
return newarr.join(' ');
}
console.log(capitalize('capitalize each word in the string they say...'));
