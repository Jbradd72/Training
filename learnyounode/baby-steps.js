var arr = process.argv.splice(2);

var sum = arr.reduce(function(sum, currentValue){
    return Number(sum) + Number(currentValue);
});
console.log(sum);