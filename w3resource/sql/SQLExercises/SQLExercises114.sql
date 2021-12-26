SELECT o.ord_no, o.ord_date, o.purch_amt, c.cust_name, c.grade, s.name, s.commission
FROM orders as o
INNER JOIN salesman as s 
ON s.salesman_id = o.salesman_id
INNER JOIN customer as c
ON c.customer_id = o.customer_id;