/*Please add ; after each select statement*/
CREATE PROCEDURE solution()
BEGIN
    SET @points = CONCAT('MULTIPOINT(',(SELECT GROUP_CONCAT(CONCAT(x, ' ', y) SEPARATOR ',') FROM places),')');
	SELECT ST_AREA(ST_ConvexHull(ST_GeomFromText(@points))) AS area;
END