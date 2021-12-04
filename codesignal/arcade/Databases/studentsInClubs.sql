CREATE PROCEDURE solution()
    SELECT * FROM students, clubs
    WHERE EXISTS (
        select * from clubs
        where students.club_id = clubs.id
    )
    ORDER BY students.id;
