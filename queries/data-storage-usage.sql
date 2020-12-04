select date_trunc(month, usage_date) as usage_month
  , avg(storage_bytes + stage_bytes + failsafe_bytes) as billable_bytes
from "SNOWFLAKE"."ACCOUNT_USAGE"."STORAGE_USAGE"
group by 1
order by 1;