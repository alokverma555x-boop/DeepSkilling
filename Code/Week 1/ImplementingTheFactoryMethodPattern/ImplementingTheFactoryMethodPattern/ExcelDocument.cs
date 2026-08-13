using System;
using System.Collections.Generic;
using System.Text;

namespace ImplementingTheFactoryMethodPattern
{
    public class ExcelDocument : IDocument
    {
        public void Open() => Console.WriteLine("Opening Excel Document...");
        public void Save() => Console.WriteLine("Saving Excel Document...");
    }
}
