SELECT o.*, c.cust_name
FROM orders as o, customer as c
WHERE o.customer_id = c.customer_id and ord_date = '2012-08-17';