SELECT *
FROM orders as o
WHERE o.salesman_id = (
  SELECT salesman_id 
  FROM salesman
  WHERE city = 'London'
) 