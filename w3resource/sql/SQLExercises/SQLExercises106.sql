SELECT c.cust_name as Customers, c.city as city  
FROM customer as c, salesman as s
WHERE c.salesman_id = s.salesman_id and s.commission between 0.12 and 0.14;