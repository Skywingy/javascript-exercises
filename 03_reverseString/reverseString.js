const reverseString = function(str) {
    //split() to return a new array
    var splitString = str.split("");
    //reverse() to reverse the new created array
    var reverseArray = splitString.reverse();
    //join() to join all the elements in the array into a string
    var joinArray = reverseArray.join("");

    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
