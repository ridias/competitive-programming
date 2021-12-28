SELECT * 
FROM company_mast as c
INNER JOIN item_mast as i
ON i.pro_com = c.com_id;