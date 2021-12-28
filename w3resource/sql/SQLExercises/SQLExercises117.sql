SELECT c.cust_name, c.city, c.grade, s.name, s.city 
FROM salesman as s
INNER JOIN customer as c
ON c.salesman_id = s.salesman_id
WHERE c.grade < 300
ORDER BY c.customer_id ASC;