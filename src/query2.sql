-- Active: 1665082769293@@127.0.0.1@3306@Trybesmith
SELECT * ,
(SELECT JSON_ARRAYAGG(id), orderId 
FROM Products
WHERE orderId IS NOT NULL
GROUP BY orderId) as productsIds
FROM Orders
INNER JOIN Products ON Products.orderId = Orders.id;

SELECT
orderId as id,
JSON_ARRAYAGG(id)
FROM Products
WHERE orderId IS NOT NULL
GROUP BY orderId;

SELECT orderId as id,
userId as userId,
JSON_ARRAYAGG(p.id) as productsIds
FROM Orders as o
INNER JOIN Products as p ON p.orderId = o.id
GROUP BY orderId;

SELECT *
FROM Orders as o
INNER JOIN Products as p ON p.orderId = o.id
GROUP BY orderId;

