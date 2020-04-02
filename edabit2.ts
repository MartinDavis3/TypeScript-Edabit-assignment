
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

namespace CountInstances {

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

const outputTrial = ( input: string[], result: number ): void => {
    console.log( `"${input[0]}", "${input[1]}" gives: `, result );
}

var trial: string[];
var result: number;

console.log( "Count Instances" );

trial = ["a", "edabit"]
result = countInstances( trial[0], trial[1] );
outputTrial( trial, result );

trial = ["c", "Chamber of secrets"]
result = countInstances( trial[0], trial[1] );
outputTrial( trial, result );

trial = ["b", "big fat bubble"]
result = countInstances( trial[0], trial[1] );
outputTrial( trial, result );

}