const snowflake = require('snowflake-sdk');
const fs = require('fs');

// const sqlFileName = process.argv[2];

const account = process.env.SNOWSQL_ACCOUNT;
const user = process.env.SNOWSQL_USER;
const password = process.env.SNOWSQL_PWD;
const database = process.env.SNOWSQL_DB;
const schema = process.env.SNOWSQL_SCHEMA;

const isDate = function(date) {
  return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}

module.exports = function(sqlFileName) {
  const connection = snowflake.createConnection({
    account: account,
    username: user,
    password: password,
    database: database,
    schema: schema,
    role: 'accountadmin'
  });
  
  connection.connect(
    function(err, conn) {
      if (err) {
        console.error('Unable to connect: ' + err.message);
      }
    }
  );
  
  const sqlQuery = fs.readFileSync(sqlFileName);
  
  var statement = connection.execute({
    sqlText: `${sqlQuery}`,
    complete: function(err, stmt, rows) {
      if (err) {
        console.error('Failed to execute statement due to the following error: ' + err.message);
      } else {
        rows.forEach((row) => {
          for(let key in row) {
            if(isDate(row[key])) {
              row[key] = row[key] + "";
            }
          }
        });
        console.log(JSON.stringify(rows));
      }
    }
  });
}
