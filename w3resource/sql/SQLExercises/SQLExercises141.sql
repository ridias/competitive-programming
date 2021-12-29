SELECT *
from orders
WHERE purch_amt > (
  SELECT AVG(purch_amt)
  From orders 
  WHERE ord_date = '2012-10-10'
)