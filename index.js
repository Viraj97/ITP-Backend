const api1 = require('./api1');
const login = require('./login');
const newcustomer = require('./files/Customer/newcustomer');
// const dbconnection = require('./dbconnection')
const deletecustomer = require('./files/Customer/deletecustomer');
const addstockdetails = require('./files/Restaurent/addstockdetails');
const deletedetails = require('./files/Restaurent/deletedetails');
const tablebooking = require('./files/Restaurent/tablebooking');
const tablebookingdelete = require('./files/Restaurent/tablebookingdelete');
var express = require('express');

const app = express();

api1(app);
login(app);
// dbconnection(app);
newcustomer(app);
deletecustomer(app);
addstockdetails(app);
deletedetails(app);
tablebooking(app);
tablebookingdelete(app);
app.listen(3000);
