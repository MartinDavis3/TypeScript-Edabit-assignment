var sumOfCubes;
(function (sumOfCubes_1) {
    var reducingFunction = function (a, v) {
        return a + Math.pow(v, 3);
    };
    var sumOfCubes = function (inputArray) {
        return inputArray.reduce(reducingFunction, 0);
    };
    var outputTrial = function (input, result) {
        console.log("[" + input + "] gives: ", result);
    };
    var trialArray;
    var result;
    console.log("Sum of Cubes:");
    trialArray = [1, 5, 9];
    result = sumOfCubes(trialArray);
    outputTrial(trialArray, result);
    trialArray = [3, 4, 5];
    result = sumOfCubes(trialArray);
    outputTrial(trialArray, result);
    trialArray = [2];
    result = sumOfCubes(trialArray);
    outputTrial(trialArray, result);
    trialArray = [];
    result = sumOfCubes(trialArray);
    outputTrial(trialArray, result);
})(sumOfCubes || (sumOfCubes = {}));
//# sourceMappingURL=edabit1.js.map