CREATE PROCEDURE solution()
    SELECT id,login,name
    FROM users
    WHERE type='user'
    or type!='user'
    ORDER BY id
