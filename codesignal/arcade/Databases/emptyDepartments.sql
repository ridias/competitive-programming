/*Please add ; after each select statement*/
CREATE PROCEDURE solution()
BEGIN
	Select dep_name from departments
    where not exists(
        select * from employees where departments.id = employees.department
    );
END