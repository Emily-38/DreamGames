
const mysql= require('mysql2/promise')
try{
module.exports.pool = mysql.createPool({
    host: '127.0.0.1',//
    user: 'root',
    password: '',
    database: 'dreamgames',
    waitForConnections: true,
    multipleStatements: true
})}catch(err){
    console.log(err)

}
