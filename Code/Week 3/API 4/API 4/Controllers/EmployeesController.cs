using Microsoft.AspNetCore.Mvc;

namespace API_4.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : ControllerBase
    {
        private static List<Employee> _employees = new List<Employee>

    {
        new Employee { Id = 1, Name = "Alice", Department = "IT" },
        new Employee { Id = 2, Name = "Bob", Department = "HR" }
    };
    

    [HttpPut("{id}")]
        public ActionResult<Employee> UpdateEmployee(int id, [FromBody] Employee updatedEmployee)
        {
            // 1. Validation: Check if ID is less than or equal to 0
            if (id <= 0)
            {
                return BadRequest("Invalid employee id");
            }

            // 2. Find the existing employee
            var employee = _employees.FirstOrDefault(e => e.Id == id);

            // 3. Validation: Check if ID exists in the list
            if (employee == null)
            {
                return BadRequest("Invalid employee id");
            }

            // 4. Update the data
            employee.Name = updatedEmployee.Name;
            employee.Department = updatedEmployee.Department;

            // 5. Return the updated employee
            return Ok(employee);
        }
    }
    }
