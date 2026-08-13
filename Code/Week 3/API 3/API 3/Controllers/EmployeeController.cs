using API_3.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API_3.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        private List<Employee> GetStandardEmployeeList() => new List<Employee> {
        new Employee { Id = 1, Name = "John Doe", Salary = 50000 }
    };

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<List<Employee>> GetStandard()
        {
            throw new Exception("Test Exception");
        }

        [HttpPost]
        public IActionResult CreateEmployee([FromBody] Employee employee) 
        {
            return Ok(employee);
        }
    }
}
