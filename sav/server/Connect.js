var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root123$'
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected');
});