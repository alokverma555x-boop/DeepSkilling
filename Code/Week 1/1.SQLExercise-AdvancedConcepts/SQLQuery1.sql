SELECT 
    ProductName,
    Category,
    Price,
    ROW_NUMBER() OVER(PARTITION BY Category ORDER BY Price DESC) AS RowNumber,
    RANK() OVER(PARTITION BY Category ORDER BY Price DESC) AS RankVal,
    DENSE_RANK() OVER(PARTITION BY Category ORDER BY Price DESC) AS DenseRankVal
FROM Products;