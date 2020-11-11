select warehouse_name,
       sum(credits_used) as total_credits_used
from  "SNOWFLAKE"."ACCOUNT_USAGE"."WAREHOUSE_METERING_HISTORY"
where start_time >= date_trunc(month, current_date)
group by 1
order by 2 desc;