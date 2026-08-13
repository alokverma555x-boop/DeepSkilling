CREATE PROCEDURE sp_GetEmployeeCountByDept
    @DepartmentID INT,
    @EmployeeCount INT OUTPUT
AS
BEGIN
    SELECT @EmployeeCount = COUNT(*)
    FROM Employees
    WHERE DepartmentID = @DepartmentID;
END;


DECLARE @TotalEmployees INT;

EXEC sp_GetEmployeeCountByDept @DepartmentID = 1, @EmployeeCount = @TotalEmployees OUTPUT;

SELECT @TotalEmployees AS TotalEmployeeCount;