CREATE PROCEDURE solution()
BEGIN
    DELETE FROM currencies
    where LENGTH(code) != 3;

    SELECT * FROM currencies ORDER BY code;
END
