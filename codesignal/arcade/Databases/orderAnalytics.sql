DROP PROCEDURE IF EXISTS solution;
CREATE PROCEDURE solution()
BEGIN

    CREATE OR REPLACE VIEW order_analytics AS
    Select id, YEAR(order_date) as year, QUARTER(order_date) as quarter, type, quantity * price as total_price
    from orders;

    SELECT *
    FROM order_analytics
    ORDER by id;
END;
