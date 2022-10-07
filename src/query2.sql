-- Active: 1665082769293@@127.0.0.1@3306@Trybesmith
SELECT orderId as id,
userId as userId,
JSON_ARRAYAGG(p.id) as productsIds
FROM Orders as o
INNER JOIN Products as p ON p.orderId = o.id
GROUP BY orderId;

SELECT * FROM Trybesmith.Orders LIMIT 100;

SELECT * FROM Trybesmith.Products LIMIT 100;

UPDATE Trybesmith.Products SET orderId = 1 WHERE id = 1;