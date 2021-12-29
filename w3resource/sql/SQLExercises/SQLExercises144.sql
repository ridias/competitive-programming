#correction

SELECT *
FROM customer
WHERE customer_id =
    (SELECT salesman_id -2001
     FROM salesman
     WHERE name = 'Mc Lyon');
