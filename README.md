# snowflake node integration
snowflake node integration script running agains snowflake instance

# How to run

### Prerequisites

You need to have `node.js` installed on the machine you're going to run the script from

For the instructions on how to install it visit [node.js official website](https://nodejs.org/en/download/)

### Assign values to the following environment variables:

- `SNOWSQL_ACCOUNT` - your snowflake account name
  - for example for Azure snowflake instance ab123.west-europe.azure
- `SNOWSQL_USER` - your snowflake username (used for logging into the account)
- `SNOWSQL_PWD` - your snowflake password
- `SNOWSQL_DB` - snowflake DB name you want to run queries against
- `SNOWSQL_SCHEMA` - snowflake schema you want to use (e.g. account-usage)

For example on Mac OS/Linux do `export SNOWSQL_ACCOUNT=ab123.west-europe.azure`
On Windows do `set SNOWSQL_ACCOUNT=abc123.west-europe.azure`

### Install node modules

Run `npm install` in the main directory to install all node dependencies (mainly `snowflake-sdk`) to be able to connect to Snowflake instance

### Pass sql file name when running the script

You must provide the name of an sql file containing an sql query you want to run agains your Snowflake instance

In this repo there is an example sql file `test.sql` containing a query.

The main script in this repo is `node_snowflake.js`

Run the script like this:

`node node_snowflake.js test.sql`

The above command will run the query from `test.sql` agains the Snowflake instance set up by the environment variable from the first step
