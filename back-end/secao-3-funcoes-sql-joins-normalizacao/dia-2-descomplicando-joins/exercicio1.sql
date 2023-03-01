SELECT mov.title, box.rating FROM pixar.movies AS mov
INNER JOIN pixar.box_office AS box
ON mov.id = box.movie_id
ORDER BY box.rating DESC;