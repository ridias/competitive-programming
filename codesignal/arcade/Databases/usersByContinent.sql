/*Please add ; after each select statement*/
CREATE PROCEDURE solution()
BEGIN
	select continent, sum(users) as users from countries
    group by continent
    order by users desc;
END