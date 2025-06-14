SELECT 
    c.name AS name,
    r.rentals_date AS rentals_date
FROM 
    rentals r
    JOIN customers c 
    ON r.id_customers = c.id
WHERE 
    r.rentals_date between '2016-09-01' and '2016-09-30';