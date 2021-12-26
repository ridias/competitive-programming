SELECT year, subject, winner, country, category 
FROM nobel_win 
WHERE year = 1970 
ORDER BY subject asc 
except
SELECT year, subject, winner, country, category
FROM nobel_win
where year = 1970 and (subject = 'Chemistry' or subject = 'Economics');


#correction

SELECT *
FROM nobel_win
WHERE year=1970 
ORDER BY
 CASE
    WHEN subject IN ('Economics','Chemistry') THEN 1
    ELSE 0
 END ASC,
 subject,
 winner;