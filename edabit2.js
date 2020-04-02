var CountInstances;
(function (CountInstances) {
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
    var outputTrial = function (input, result) {
        console.log("\"" + input[0] + "\", \"" + input[1] + "\" gives: ", result);
    };
    var trial;
    var result;
    console.log("Count Instances");
    trial = ["a", "edabit"];
    result = countInstances(trial[0], trial[1]);
    outputTrial(trial, result);
    trial = ["c", "Chamber of secrets"];
    result = countInstances(trial[0], trial[1]);
    outputTrial(trial, result);
    trial = ["b", "big fat bubble"];
    result = countInstances(trial[0], trial[1]);
    outputTrial(trial, result);
})(CountInstances || (CountInstances = {}));
//# sourceMappingURL=edabit2.js.map