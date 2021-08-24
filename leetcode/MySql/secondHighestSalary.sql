# https://leetcode.com/problems/second-highest-salary/

SELECT MAX(Salary) AS SecondHighestSalary FROM Employee
Where SALARY NOT In (SELECT MAX(Salary) FROM Employee)