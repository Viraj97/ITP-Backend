const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'my-db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected! new');
});

module.exports = function (app) {

    app.get('/newcustomer', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
        connection.query('INSERT INTO newcustomer (NIC,name,email,phone,address) VALUES ("' + req.query.NIC + '","'+req.query.name+'","'+req.query.email+'","'+req.query.phone+'","'+req.query.address+'")', (err, rows) => {
            console.log('Error here', err);
        });
    });
};

