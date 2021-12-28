SELECT s.name, s.city, c.cust_name, c.city
FROM customer as c
CROSS JOIN salesman as s

#correction

SELECT * 
FROM salesman a 
CROSS JOIN customer b 
WHERE a.city IS NOT NULL;
