SELECT c.cust_name, c.city, o.ord_no, o.ord_date, o.purch_amt, s.name, s.commission
FROM orders as o
INNER JOIN customer as c
ON c.customer_id = o.customer_id
INNER JOIN salesman as s
ON s.salesman_id = o.salesman_id;