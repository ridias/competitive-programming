SELECT *
from orders
WHERE salesman_id = (
  SELECT salesman_id
  From salesman 
  WHERE city = 'New York'
)