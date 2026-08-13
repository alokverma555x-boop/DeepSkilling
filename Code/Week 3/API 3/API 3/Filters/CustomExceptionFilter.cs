using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.IO;

public class CustomExceptionFilter : IExceptionFilter
{
    public void OnException(ExceptionContext context)
    {
        string message = context.Exception.Message;
        File.WriteAllText("error_log.txt", message);

        context.Result = new ObjectResult(new { error = message })
        {
            StatusCode = 500
        };
        context.ExceptionHandled = true;
    }
}