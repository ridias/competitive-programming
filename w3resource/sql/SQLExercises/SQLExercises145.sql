SELECT count(*), grade
FROM customer
WHERE grade > (
  SELECT AVG(grade)
  FROM customer
  WHERE city = 'New York'
)
GROUP BY grade;