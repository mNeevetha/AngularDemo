var express = require('express');
var appl = express();
appl.use(express.static(__dirname + "/app"));
appl.listen(process.env.PORT || 3000);