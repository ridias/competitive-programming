/*Please add ; after each select statement*/
CREATE PROCEDURE solution()
BEGIN
	select ExtractValue(xml_doc, '/catalog/book[1]/author') as author
    from catalogs
    order by author;
END