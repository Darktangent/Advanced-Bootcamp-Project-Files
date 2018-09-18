
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
