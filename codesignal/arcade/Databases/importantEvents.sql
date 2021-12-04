/*Please add ; after each select statement*/
CREATE PROCEDURE solution()
BEGIN
	select * from events order by weekday(event_date) asc, participants desc;
END