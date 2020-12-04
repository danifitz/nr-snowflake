-- Get all failed logins from between 121 and 120 minutes ago - this is due to data latency in the Snowflake data
select * from "SNOWFLAKE"."ACCOUNT_USAGE"."LOGIN_HISTORY" where is_success = 'NO' and event_timestamp > dateadd(minute, -121, getdate()) AND event_timestamp < dateadd(minute, -120, getdate());
