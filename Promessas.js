"use strict";
exports.__esModule = true;
var fs = require("fs");
function findFolderAsync(directory) {
    var p = new Promise(function (resolve, reject) {
        fs.stat(directory, function (err, stats) {
            //Check if error defined and the error code is "not exists"
            if (err && err.code === "ENOENT") {
                reject("Directory does not exist");
            }
            else {
                resolve("Directory exists");
            }
        });
    });
    return p;
}
findFolderAsync("myFolder").then(function (msg) {
    console.log("Promise resolved as " + msg);
}, function (msg) {
    console.log("Promise rejected as " + msg);
});
