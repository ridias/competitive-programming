# https://leetcode.com/problems/big-countries/
# Write your MySQL query statement below
Select name, population, area 
From World
where area >= 3000000 or population >= 25000000;