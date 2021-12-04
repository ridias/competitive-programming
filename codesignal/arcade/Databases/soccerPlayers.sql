/*Please add ; after each select statement*/
CREATE PROCEDURE solution()
BEGIN
	select GROUP_CONCAT(CONCAT(first_name," ", surname, " #", player_number) order by player_number asc separator "; ") as players
    from soccer_team;
END