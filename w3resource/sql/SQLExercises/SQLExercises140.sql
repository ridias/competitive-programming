SELECT * 
from orders
WHERE salesman_id = (
  SELECT salesman_id
  FROM orders
  WHERE customer_id = 3007
)