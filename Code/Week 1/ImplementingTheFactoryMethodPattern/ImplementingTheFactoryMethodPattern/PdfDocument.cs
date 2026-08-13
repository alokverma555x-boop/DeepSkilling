using System;
using System.Collections.Generic;
using System.Text;

namespace ImplementingTheFactoryMethodPattern
{
    public class PdfDocument : IDocument
    {
        public void Open() => Console.WriteLine("Opening PDF Document...");
        public void Save() => Console.WriteLine("Saving PDF Document...");
    }
}
