SELECT c.cust_name, c.city, c.grade, o.ord_no, o.ord_date, o.purch_amt, s.name
FROM customer as c
RIGHT JOIN salesman as s
ON c.salesman_id = s.salesman_id
LEFT JOIN orders as o
ON c.customer_id = o.customer_id
WHERE o.purch_amt > 2000 and c.grade is not null;