select 
    m.id,
    m.name
from movies m
join 
    genres g on m.id_genres = g.id
where g.description 
like 'Action'