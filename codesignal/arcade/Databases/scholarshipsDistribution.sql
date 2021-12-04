/*Please add ; after each select statement*/
CREATE PROCEDURE solution()
BEGIN
	select candidates.candidate_id as student_id from candidates
    left join detentions on candidates.candidate_id = detentions.student_id
    where detentions.detention_date is null;
END