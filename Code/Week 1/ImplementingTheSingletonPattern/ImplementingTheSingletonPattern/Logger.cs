using System;
using System.Collections.Generic;
using System.Text;

namespace ImplementingTheSingletonPattern
{
    public class Logger
    {
        private static readonly Logger _instance = new Logger();

        private Logger()
        {
            Console.WriteLine("Logger initialized.");
        }

        public static Logger Instance
        {
            get
            {
                return _instance;
            }
        }

        public void Log(string message)
        {
            Console.WriteLine($"[LOG]: {message}");
        }
    }
}
