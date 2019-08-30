module.exports = function (app) {

    app.get('/login', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
        if (req.query.user_id) {
            connection.query('SELECT * FROM employee WHERE id ="' + req.query.user_id + '"', (err, rows) => {
                if (err) throw err;
                if (rows[0].password === req.query.pw) {
                    res.json([{ login: true }]);
                } else {
                    res.json([{ login: false }]);
                }
            });
        }
        else{
            res.json([{login: false}]);
        }
    });

};