const api1 = require('./api1');
const login = require('./login');
var express = require('express');

const app = express();

api1(app);
login(app);

app.listen(3000);
