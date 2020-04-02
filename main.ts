
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



const reducingFunction = ( a: number, v: number): number => {
    return a + Math.pow( v, 3 )
}

const sumOfCubes = ( inputArray: number[] ): number => {
    return inputArray.reduce( reducingFunction, 0 );
}

console.log( "Sum of Cubes:" );

const trialArray1 = [ 1, 5, 9 ];
console.log( sumOfCubes( trialArray1 ) );

const trialArray2 = [ 3, 4, 5 ];
console.log( sumOfCubes( trialArray2 ) );

const trialArray3 = [ 2 ];
console.log( sumOfCubes( trialArray3 ) );

const trialArray4: number[] = [];
console.log( sumOfCubes( trialArray4 ) );


/**
 * Edabit (easy) challenge - Count Instances of a Character in a String
 * https://edabit.com/challenge/kbFhwaDyrd79JrgeB
 * 
 * Create a function that takes two strings as arguments and returns the number
 * of times the first string (the single character) is found in the second string.
 * Examples
 * charCount("a", "edabit") ➞ 1
 * charCount("c", "Chamber of secrets") ➞ 1
 * charCount("b", "big fat bubble") ➞ 4
 * Notes
 * Your output must be case-sensitive (see second example).
 */

console.log( "Count Instances" );

const countInstances = ( testChar: string, testPhrase: string): number => {
    let phraseArray = testPhrase.split("");
    let count = 0;
    for ( let i = 0; i < phraseArray.length; i++ ) {
        if ( testChar === phraseArray[i] ) {
            count++;
        }
    }
    return count;
}

console.log( countInstances("a", "edabit") );
console.log( countInstances("c", "Chamber of secrets") );
console.log( countInstances("b", "big fat bubble") );
