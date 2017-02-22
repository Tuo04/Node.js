var optFile = require("fs");
var reCall = require("./Support");
module.exports = {
    writeFile: function (path, data) {
        optFile.appendFile(path, data, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Data written successfully!");
        })
    },
    writeFileSync: function (path, data) {
        optFile.appendFileSync(path, data);
    },
    readFile: function (path, request, response) {
        optFile.readFile(path, function (err, data) {
            if (err) {
                return console.log(err);
            }
            reCall["recall"](data.toString(), request, response);
            
        })},
    readFileSync: function (path, request, response) {
        var data = optFile.readFileSync(path);
        response.write(data.toString());
        response.end("");
    }
}