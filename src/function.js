//Implement a function that accepts 2 arrays of numbers as arguments and returns a single array with
// all the numbers from both arrays, sorted in ascending order. 
//The function should throw an exception if the arguments that are passed are not arrays of numbers.

function joinerSorter(array1,array2){
    if (array1.some(isNaN) || array2.some(isNaN)) {
        throw new Error('arguments are not arrays of numbers'); 
      }
    let almostAnswer= array1.concat(array2);
    almostAnswer.sort(function(a, b) {
        return a - b;
      });
    return almostAnswer
}
//manual testing
joinerSorter([1,5,17,8],[2,79,3])
joinerSorter([1,5,"error-maker",8],[2,79,3])