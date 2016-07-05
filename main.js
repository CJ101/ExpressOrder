var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.listen(8082);
console.log('Expres Order Running at 8082');