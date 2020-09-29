var express = require('express');
var app = express();

app.use('/', express.static('./dist/cauxsaude'));


app.listen(8080);
