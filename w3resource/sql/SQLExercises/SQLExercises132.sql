SELECT i.pro_price, i.pro_name, c.com_name
FROM item_mast as i
INNER JOIN company_mast as c
ON c.com_id = i.pro_com 
AND i.pro_price = (
  SELECT max(z.pro_price)
  FROM item_mast as z, company_mast as y
  WHERE y.com_id = z.pro
);

#correction 

SELECT A.pro_name, A.pro_price, F.com_name
   FROM item_mast A INNER JOIN company_mast F
   ON A.pro_com = F.com_id
     AND A.pro_price =
     (
       SELECT MAX(A.pro_price)
         FROM item_mast A
         WHERE A.pro_com = F.com_id
     );
