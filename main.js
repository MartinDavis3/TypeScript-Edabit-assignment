var reducingFunction = function (a, v) {
    return a + Math.pow(v, 3);
};
var sumOfCubes = function (inputArray) {
    return inputArray.reduce(reducingFunction, 0);
};
console.log("Sum of Cubes:");
var trialArray1 = [1, 5, 9];
console.log(sumOfCubes(trialArray1));
var trialArray2 = [3, 4, 5];
console.log(sumOfCubes(trialArray2));
var trialArray3 = [2];
console.log(sumOfCubes(trialArray3));
var trialArray4 = [];
console.log(sumOfCubes(trialArray4));
console.log("Count Instances");
var countInstances = function (testChar, testPhrase) {
    var phraseArray = testPhrase.split("");
    var count = 0;
    for (var i = 0; i < phraseArray.length; i++) {
        if (testChar === phraseArray[i]) {
            count++;
        }
    }
    return count;
};
console.log(countInstances("a", "edabit"));
console.log(countInstances("c", "Chamber of secrets"));
console.log(countInstances("b", "big fat bubble"));
//# sourceMappingURL=main.js.map