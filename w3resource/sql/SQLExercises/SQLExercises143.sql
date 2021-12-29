SELECT commission
from salesman
WHERE salesman_id = (
  SELECT salesman_id
  From customer 
  WHERE city = 'Paris'
)