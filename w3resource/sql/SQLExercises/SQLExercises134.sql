SELECT * 
FROM emp_department as ed
INNER JOIN emp_details as edt
ON ed.dpt_code = edt.emp_dept;