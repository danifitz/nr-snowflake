# New Relic Snowflake Integration

This integration provides a script which can run any query against a Snowflake account and store the results in New Relic.

Use cases include:
* Monitor Query performance
* Monitor logins and identify potential security incidents
* Monitor and optimise warehouse and cloud credit costs
* Capture any data you have stored in Snowflake for real-time alerting and reporting.

# How to run

### Prerequisites

1. Set the environment variables (see section below)
2. Copy the executable file `snowflake_node_query_integration-win.exe` somewhere on the machine
3. Copy `flex-example.yml` to `C:\Program Files\newrelic\newrelic-infra\integrations.d`
4. Replace the values in `flex-example.yml` with the path to the executable and the queries

### Assign values to the following environment variables:

- `SNOWSQL_ACCOUNT` - your snowflake account name
  - for example for Azure snowflake instance ab123.west-europe.azure
- `SNOWSQL_USER` - your snowflake username (used for logging into the account)
- `SNOWSQL_PWD` - your snowflake password
- `SNOWSQL_DB` - snowflake DB name you want to run queries against
- `SNOWSQL_SCHEMA` - snowflake schema you want to use (e.g. account-usage)
- `SNOWSQL_ROLE` - snowflake role that should be used when querying (must have access to account_usage and information_schema)
- `SNOWSQL_WAREHOUSE` - the snowflake warehouse you want to connect to

For example on Mac OS/Linux do `export SNOWSQL_ACCOUNT=ab123.west-europe.azure`
On Windows do `set SNOWSQL_ACCOUNT=abc123.west-europe.azure`

### Adding more queries

Add queries to the `queries` directory and then add a new block to the nri-flex YML config file.

### Building a binary for Windows, Linux or Mac OS

To build a binary, install `pkg`
`npm install pkg -g`

Run the `pkg` command to generate binaries for Linux, Windows and Mac OS or specify your platform.

Use this binary with the Flex integration to send data to New Relic from Snowflake.

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
