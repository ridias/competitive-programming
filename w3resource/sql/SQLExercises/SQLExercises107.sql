SELECT orders.ord_no, customer.cust_name, salesman.commission, orders.purch_amt * salesman.commission
FROM orders, salesman, customer
WHERE customer.grade >= 200 and orders.salesman_id = salesman.salesman_id and customer.customer_id = orders.customer_id;