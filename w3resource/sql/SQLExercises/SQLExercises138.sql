SELECT o.ord_no, o.purch_amt, o.ord_date, o.customer_id, o.salesman_id
FROM orders as o
WHERE o.salesman_id = (
  SELECT salesman_id 
  FROM salesman
  WHERE name = 'Paul Adam'
) 