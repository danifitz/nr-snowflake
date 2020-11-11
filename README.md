# snowflake node integration
snowflake node integration script running agains snowflake instance

# How to run

### Prerequisites

1. Set the environment variables (see section below)
2. Copy the executable file `snowflake_node_query_integration-win.exe` somewhere on the machine
3. 
4. Copy `flex-example.yml` to `C:\Program Files\newrelic\newrelic-infra\integrations.d`
5. Replace the values in `flex-example.yml` with the path to the executable and the queries

### Assign values to the following environment variables:

- `SNOWSQL_ACCOUNT` - your snowflake account name
  - for example for Azure snowflake instance ab123.west-europe.azure
- `SNOWSQL_USER` - your snowflake username (used for logging into the account)
- `SNOWSQL_PWD` - your snowflake password
- `SNOWSQL_DB` - snowflake DB name you want to run queries against
- `SNOWSQL_SCHEMA` - snowflake schema you want to use (e.g. account-usage)

For example on Mac OS/Linux do `export SNOWSQL_ACCOUNT=ab123.west-europe.azure`
On Windows do `set SNOWSQL_ACCOUNT=abc123.west-europe.azure`

### Developing

You need to have `node.js` installed on the machine you're going to run the script from

For the instructions on how to install it visit [node.js official website](https://nodejs.org/en/download/)

#### Install node modules

Run `npm install` in the main directory to install all node dependencies (mainly `snowflake-sdk`) to be able to connect to Snowflake instance

#### Pass sql file name when running the script

You must provide the name of an sql file containing an sql query you want to run agains your Snowflake instance

In this repo there is an example sql file `queries/test.sql` containing a query.

Executable binaries can be generated for Windows, Linux and Mac OS by running
`pkg .`

You must pass a SQL file as input for the program
`snowflake_node_query_integration-win.exe file.sql`
