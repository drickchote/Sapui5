var express = require('express');
var app = express();

app.use(express.static("C:/Projetos_SAP/Curso_SAP/MyApp/webapp"));

app.all('/', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

console.log("init");
console.log(__dirname);

app.listen(process.env.PORT || 8000);

var cors_proxy = require('cors-anywhere');
var host = '0.0.0.0';

var port = 8081;
cors_proxy.createServer({
  originWhitelist: [],
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function () {
  console.log('Running CORS Anywhere on ' + host + ':' + port);
});