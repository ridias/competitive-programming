SELECT c.cust_name, c.city, o.ord_no, o.ord_date, o.purch_amt
FROM orders as o
RIGHT JOIN customer as c
ON c.customer_id = o.customer_id
ORDER BY o.ord_date;