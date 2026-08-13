using ImplementingTheFactoryMethodPattern;
using ImplementingTheFactoryMethodPattern;
using System;

Console.WriteLine("--- Document Management System ---");

Console.WriteLine("\nClient: Requesting a Word Document.");
DocumentFactory wordFactory = new WordFactory();
wordFactory.ProcessDocument();

Console.WriteLine("\nClient: Requesting a PDF Document.");
DocumentFactory pdfFactory = new PdfFactory();
pdfFactory.ProcessDocument();

Console.WriteLine("\nClient: Requesting an Excel Document.");
DocumentFactory excelFactory = new ExcelFactory();
excelFactory.ProcessDocument();

Console.ReadLine(); 