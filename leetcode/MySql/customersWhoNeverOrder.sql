# https://leetcode.com/problems/customers-who-never-order/
# Write your MySQL query statement below

select c.Name as Customers 
from Customers as c
where c.Id not in (
    select o.CustomerId from Orders as o
)
