/*Please add ; after each select statement*/
CREATE PROCEDURE solution()
BEGIN
	select count(name) as number, AVG(population) as average, SUM(population) as total from countries;
END