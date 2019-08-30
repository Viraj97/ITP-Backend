const api1 = require('./api1');
const login = require('./login');
const newcustomer = require('./files/Customer/newcustomer');
// const dbconnection = require('./dbconnection')
const deletecustomer = require('./files/Customer/deletecustomer')
var express = require('express');

const app = express();

api1(app);
login(app);
// dbconnection(app);
newcustomer(app);
deletecustomer(app);

app.listen(3000);
