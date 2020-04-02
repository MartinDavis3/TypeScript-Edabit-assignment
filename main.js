var reducingFunction = function (a, v) {
    return a + Math.pow(v, 3);
};
var sumOfCubes = function (inputArray) {
    return inputArray.reduce(reducingFunction, 0);
};
var trialArray1 = [1, 5, 9];
console.log(sumOfCubes(trialArray1));
var trialArray2 = [3, 4, 5];
console.log(sumOfCubes(trialArray2));
var trialArray3 = [2];
console.log(sumOfCubes(trialArray3));
var trialArray4 = [];
console.log(sumOfCubes(trialArray4));
//# sourceMappingURL=main.js.map