SELECT c.cust_name as Customer, c.city, s.name as Salesman, s.commission
FROM customer as c
INNER JOIN salesman as s
ON s.salesman_id = c.salesman_id;