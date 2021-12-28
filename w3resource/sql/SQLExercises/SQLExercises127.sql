SELECT * 
FROM salesman as s
CROSS JOIN customer as c 
WHERE s.city IS NOT NULL and c.grade is not null; 
