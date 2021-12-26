SELECT o.ord_no, c.cust_name, o.customer_id, o.salesman_id FROM salesman as s, customer as c, orders as o WHERE s.salesman_id = c.salesman_id and c.city <> s.city and c.customer_id = o.customer_id;