var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password: "joseph",
    database: "mydb"
}); 

con.connect(function (err) {
    if (err) throw err; 
    console.log("Connected!"); 
    var name = 'joseph'; 
    var sql = "SELECT * FROM client WHERE name = ?"; 

    con.query(sql, [name], function(err, result, fields) {
        if (err) throw err;
        console.log(result); 
    });
});