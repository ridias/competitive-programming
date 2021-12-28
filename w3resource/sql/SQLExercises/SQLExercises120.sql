SELECT *
FROM salesman as s
RIGHT JOIN customer as c
ON s.salesman_id = c.salesman_id
ORDER BY s.salesman_id;