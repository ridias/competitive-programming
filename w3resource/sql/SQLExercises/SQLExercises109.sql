SELECT s.salesman_id, s.name, s.city, s.commission, c.cust_name, c.city
FROM salesman as s
INNER JOIN  customer as c
ON s.city = c.city;
