# Write your MySQL query statement below
# https://leetcode.com/problems/combine-two-tables/submissions/
SELECT p.firstName, p.lastName, a.city, a.state
FROM Person as p
LEFT JOIN Address as a
ON a.personId = p.personId
;
