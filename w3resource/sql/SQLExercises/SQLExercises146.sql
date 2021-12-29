SELECT ord_no, purch_amt, ord_date, salesman_id
FROM orders
WHERE salesman_id = (
  SELECT salesman_id
  FROM salesman
  WHERE commission = (
    SELECT MAX(commission)
    FROM salesman
  )
)
