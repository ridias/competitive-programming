/*Please add ; after each select statement*/
CREATE PROCEDURE solution()
BEGIN
    select * from (
	    select COALESCE(country, "Total:") country, count(country) as competitors
        from foreignCompetitors
        group by country with rollup
    ) as dt
    order by country = "Total:", country;
    
END

