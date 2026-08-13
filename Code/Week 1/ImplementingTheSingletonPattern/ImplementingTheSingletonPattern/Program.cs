using System;
using ImplementingTheSingletonPattern;

Logger logger1 = Logger.Instance;
logger1.Log("This is the first log message.");

Logger logger2 = Logger.Instance;
logger2.Log("This is the second log message.");

if (Object.ReferenceEquals(logger1, logger2))
{
    Console.WriteLine("SUCCESS: Both logger variables contain the same instance.");
}
else
{
    Console.WriteLine("FAILURE: The instances are different.");
}

Console.ReadLine();
