SELECT c.cust_name, c.city, o.ord_no, o.ord_date, o.purch_amt
FROM customer as c
RIGHT JOIN orders as o
ON c.customer_id = o.customer_id