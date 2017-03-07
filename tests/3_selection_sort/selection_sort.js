/**
 *
 * Algorithms - Selection Sort
 *
 **/

function swap(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

function indexOfMinimum(array, startIndex) {
    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
};

function selectionSort(array) {
    for(var iterationCounter = 0; iterationCounter < array.length; iterationCounter++) {
        var iterationMin = indexOfMinimum(array, iterationCounter);
        swap(array, iterationCounter, iterationMin);
    }
};

/**
 *
 * Testing
 *
 **/
 
var array = [22, 11, 99, 88, 9, 7, 42];

console.log('Array before sorting is: '+array);
selectionSort(array);
console.log('Array after sorting is: '+array);