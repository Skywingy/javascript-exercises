const sumAll = function(...args) {
    let sumTotal = 0;
if (args[0] < 0 || args[1] < 0) {
    return "ERROR";
     }
if (!Number.isInteger(args[0]) || !Number.isInteger(args[1])) {
    return "ERROR";
}
    
else if (args[0] < args[1]) {
    for (let i = args[0]; i <= args[1]; i++){
        sumTotal = sumTotal + i;
    }
}
else if (args[0] > args[1]) {
    for (let i = args[1]; i <=args[0]; i++){
        sumTotal = sumTotal + i;
    }
}

return sumTotal;
};

// Do not edit below this line
module.exports = sumAll;
