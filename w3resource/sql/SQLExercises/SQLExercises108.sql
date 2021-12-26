SELECT customer.customer_id, customer.cust_name, customer.city, customer.grade, customer.salesman_id, orders.ord_no, orders.purch_amt, orders.ord_date, orders.customer_id, orders.salesman_id
FROM customer, salesman, orders
WHERE orders.ord_date = '2012-10-05' and customer.customer_id = orders.customer_id and orders.salesman_id = salesman.salesman_id;