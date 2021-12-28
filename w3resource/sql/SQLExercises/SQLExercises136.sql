SELECT edt.emp_fname, edt.emp_lname, ed.dpt_name
FROM emp_department as ed
INNER JOIN emp_details as edt
ON ed.dpt_code = edt.emp_dept
WHERE ed.dpt_allotment > 50000;