var path = require("path");

module.exports = function (app) {
  app.get("/phone.html", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/html/phone.html"));
  });
  app.get("/home.html", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/html/home.html"));
  });
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/html/home.html"));
  });
};
