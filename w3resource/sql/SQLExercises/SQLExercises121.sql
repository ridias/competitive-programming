SELECT c.cust_name, c.city, c.grade, o.ord_no, o.ord_date, o.purch_amt
FROM orders as o
INNER JOIN customer as c
ON o.customer_id = c.customer_id
INNER JOIN salesman as s
ON s.salesman_id = o.salesman_id;