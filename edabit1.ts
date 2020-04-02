
/**
 * Edabit (easy) challenge - Sum of cubes
 * https://edabit.com/challenge/XdAR3KohR5w7rjrFg
 * 
 * Create a function that takes in an array of numbers and returns the sum of its cubes.
 * Examples:
 * sumOfCubes([1, 5, 9]) ➞ 855
 * Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
 * sumOfCubes([3, 4, 5]) ➞ 216
 * sumOfCubes([2]) ➞ 8
 * sumOfCubes([]) ➞ 0
 * Notes:
 * If given an empty array, return 0.
 */

namespace sumOfCubes {

const reducingFunction = ( a: number, v: number): number => {
    return a + Math.pow( v, 3 )
}

const sumOfCubes = ( inputArray: number[] ): number => {
    return inputArray.reduce( reducingFunction, 0 );
}

const outputTrial = ( input: number[], result: number ): void => {
    console.log( `[${input}] gives: `, result );
}

var trialArray: number[];
var result: number;

console.log( "Sum of Cubes:" );

trialArray = [ 1, 5, 9 ];
result = sumOfCubes( trialArray )
outputTrial( trialArray, result)

trialArray = [ 3, 4, 5 ];
result = sumOfCubes( trialArray )
outputTrial( trialArray, result)

trialArray = [ 2 ];
result = sumOfCubes( trialArray )
outputTrial( trialArray, result)

trialArray = [];
result = sumOfCubes( trialArray )
outputTrial( trialArray, result)

}
