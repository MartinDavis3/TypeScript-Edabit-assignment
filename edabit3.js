var matchTheLastItem;
(function (matchTheLastItem_1) {
    var reducingFunction = function (a, v) {
        return String(a) + String(v);
    };
    var matchTheLastItem = function (inputArray) {
        var workArray;
        var testItem;
        workArray = inputArray.slice();
        testItem = String(workArray.pop());
        var concat = workArray.reduce(reducingFunction);
        return concat === testItem;
    };
    var outputTrial = function (input, result) {
        console.log("[" + input + "] gives: ", result);
    };
    var trialArray;
    var result;
    console.log("Match the Last Item:");
    trialArray = ["rsq", "6hi", "g", "rsq6hig"];
    result = matchTheLastItem(trialArray);
    outputTrial(trialArray, result);
    trialArray = [1, 1, 1, "11"];
    result = matchTheLastItem(trialArray);
    outputTrial(trialArray, result);
    trialArray = [8, "thunder", true, "8thundertrue"];
    result = matchTheLastItem(trialArray);
    outputTrial(trialArray, result);
})(matchTheLastItem || (matchTheLastItem = {}));
//# sourceMappingURL=edabit3.js.map