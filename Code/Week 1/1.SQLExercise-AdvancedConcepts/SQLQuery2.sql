CREATE NONCLUSTERED INDEX IX_Products_ProductName 
ON Products(ProductName);

CREATE CLUSTERED INDEX IX_Orders_OrderDate 
ON Orders(OrderDate);

CREATE INDEX IX_Orders_CustomerID_OrderDate 
ON Orders(CustomerID, OrderDate);

CREATE PROCEDURE sp_GetEmployeesByDepartment
    @DepartmentID INT
AS
BEGIN
    SET NOCOUNT ON;

    SELECT EmployeeID, FirstName, LastName, JobTitle
    FROM Employees 
    WHERE DepartmentID = @DepartmentID;
END;

CREATE PROCEDURE sp_InsertEmployee 
    @FirstName VARCHAR(50), 
    @LastName VARCHAR(50), 
    @DepartmentID INT, 
    @Salary DECIMAL(10,2), 
    @JoinDate DATE 
AS 
BEGIN 
    INSERT INTO Employees (FirstName, LastName, DepartmentID, Salary, JoinDate) 
    VALUES (@FirstName, @LastName, @DepartmentID, @Salary, @JoinDate); 
END;