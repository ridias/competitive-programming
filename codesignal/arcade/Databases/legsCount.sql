DROP PROCEDURE IF EXISTS solution;
CREATE PROCEDURE solution()
    SELECT sum(
        CASE type 
        WHEN 'human' THEN 2
        WHEN 'cat' THEN 4
        WHEN 'dog' then 4
        END
    ) as summary_legs
    FROM creatures
    ORDER BY id;
