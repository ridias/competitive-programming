SELECT c.cust_name as customer, c.grade as grade 
FROM salesman as s, customer as c, orders as o 
WHERE c.grade is not null and s.salesman_id = c.salesman_id and c.customer_id = o.customer_id;