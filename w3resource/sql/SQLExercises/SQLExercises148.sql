SELECT salesman_id, name
FROM salesman
WHERE salesman_id in (
  SELECT s.salesman_id
  FROM salesman as s, customer as c
  WHERE s.salesman_id = c.salesman_id
  GROUP BY s.salesman_id
  HAVING COUNT(c.customer_id) > 1)