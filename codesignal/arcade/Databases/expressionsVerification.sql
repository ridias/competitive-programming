/*Please add ; after each select statement*/
CREATE PROCEDURE solution()
BEGIN
	select *
    from expressions
    where(CASE
        WHEN operation = '+' THEN a+b-c
        WHEN operation = '-' THEN a-b-c
        WHEN operation = '*' THEN a*b-c
        WHEN operation = "/" THEN a/b-c
          END) = 0
    order by id;
END