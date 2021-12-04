CREATE PROCEDURE solution()
BEGIN
    CREATE OR REPLACE VIEW emp
    AS select id, name, YEAR(date_joined) as date_joined, "-" as salary from employees;

    SELECT id, name, date_joined, salary
    FROM emp
    ORDER BY id;
END
