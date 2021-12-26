SELECT c.cust_name as Customer, c.city, s.name as Salesman, s.commission
FROM customer as c
INNER JOIN salesman as s
ON s.salesman_id = c.salesman_id
WHERE s.commission > 0.12 and c.city <> s.city;