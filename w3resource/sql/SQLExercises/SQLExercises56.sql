SELECT * FROM salesman WHERE name like 'N__l%';
SELECT * FROM salesman WHERE name REGEXP '^N[a-z]{2}l.*$';