var optFile = require("./OptFile");
var time = new Date();
module.exports = {
    login: function (request, response) {
        optFile["readFile"]("./Views/LogInPage.html", request, response);
        optFile["writeFile"]("./Test.txt", time + "read LogIn Page completed" + '\r\n')
    },
    register: function (request, response) {
        optFile["readFile"]("./Views/RegisterPage.html", request, response);     
        optFile["writeFile"]("./Test.txt", time + "read Register Page completed" +'\r\n');
    }
}