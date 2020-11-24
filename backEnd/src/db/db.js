const mysql = require("mysql");
const mysqlConnection = mysql.createConnection({
host:"brg8x9kguujze6gnd52s-mysql.services.clever-cloud.com",
user:"ujbbhew5dtgrhjco",
password:"5Pp5jSSqit5MZzyvpCqY",
database:"brg8x9kguujze6gnd52s",
multipleStatements:true
});

mysqlConnection.connect(function(err){
if(err){
console.log(err);
}
else{
  console.log("base de datos conectada exitosamente");


}
})

module.exports = mysqlConnection;