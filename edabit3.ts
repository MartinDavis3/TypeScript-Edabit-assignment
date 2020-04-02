
/**
 * Edabit (medium) challenge - Match the Last Item
 * https://edabit.com/challenge/jbR9NupEL8zAZkbKx
 * Create a function that takes an array of items and checks if the last item matches the rest of the array.
 * Examples
 * matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) ➞ true
 * The last item is the rest joined.
 * matchLastItem([1, 1, 1, "11"]) ➞ false
 * The last item should be "111".
 * matchLastItem([8, "thunder", true, "8thundertrue"]) ➞ true
 * Notes
 * The array is always filled with items.
 */


namespace matchTheLastItem {

    const reducingFunction = ( a: string | number | boolean, v: string | number | boolean ): string => {
        return String(a) + String(v);
    }

    const matchTheLastItem = ( inputArray: (string | number | boolean)[] ): boolean => {
        // Need to copy the array so that original is not modified.
        // slice with no parameters does this.
        var workArray: (string | number | boolean)[];
        var testItem: string;
        workArray = inputArray.slice();
        testItem = String(workArray.pop());
        const concat = workArray.reduce(reducingFunction);
        return concat === testItem; 
    }

    const outputTrial = ( input: (string | number | boolean)[], result: boolean ): void => {
        console.log( `[${input}] gives: `, result );
    }
        
    var trialArray: (string | number | boolean)[];
    var result: boolean;

    console.log( "Match the Last Item:" );

    trialArray = ["rsq", "6hi", "g", "rsq6hig"];
    result = matchTheLastItem( trialArray );
    outputTrial( trialArray, result);

    trialArray = [1, 1, 1, "11"]
    result = matchTheLastItem( trialArray );
    outputTrial( trialArray, result);
    
    trialArray = [8, "thunder", true, "8thundertrue"]
    result = matchTheLastItem( trialArray );
    outputTrial( trialArray, result);
}