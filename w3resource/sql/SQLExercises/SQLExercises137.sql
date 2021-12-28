SELECT ed.dpt_name
FROM emp_department as ed
INNER JOIN emp_details as edt
ON ed.dpt_code = edt.emp_dept
group by dpt_name
having count(*) > 2;