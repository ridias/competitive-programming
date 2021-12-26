SELECT o.ord_no, o.purch_amt, c.cust_name, c.city 
FROM orders as o
INNER JOIN customer as c
ON c.customer_id = o.customer_id
WHERE purch_amt between 500 and 2000;