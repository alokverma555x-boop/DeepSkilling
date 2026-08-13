using System;
using System.Collections.Generic;
using System.Text;

namespace ImplementingTheFactoryMethodPattern
{
    public class WordDocument : IDocument
    {
        public void Open() => Console.WriteLine("Opening Word Document...");
        public void Save() => Console.WriteLine("Saving Word Document...");
    }
}
