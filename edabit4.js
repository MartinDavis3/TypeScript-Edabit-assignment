var removeZeros;
(function (removeZeros_1) {
    var removeZeros = function (input) {
        return Number(input);
    };
    var outputTrial = function (input, result) {
        console.log(input + " gives: ", result);
    };
    console.log("Remove Zeros:");
    var trialNumAsString;
    var result;
    trialNumAsString = "230.000";
    result = removeZeros(trialNumAsString);
    outputTrial(trialNumAsString, result);
    trialNumAsString = "00402";
    result = removeZeros(trialNumAsString);
    outputTrial(trialNumAsString, result);
    trialNumAsString = "03.1400";
    result = removeZeros(trialNumAsString);
    outputTrial(trialNumAsString, result);
    trialNumAsString = "30";
    result = removeZeros(trialNumAsString);
    outputTrial(trialNumAsString, result);
})(removeZeros || (removeZeros = {}));
//# sourceMappingURL=edabit4.js.map