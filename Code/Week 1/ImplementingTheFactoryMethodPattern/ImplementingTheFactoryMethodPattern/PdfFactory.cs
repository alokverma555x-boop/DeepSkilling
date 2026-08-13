using System;
using System.Collections.Generic;
using System.Text;

namespace ImplementingTheFactoryMethodPattern
{
    public class PdfFactory : DocumentFactory
    {
        public override IDocument CreateDocument()
        {
            return new PdfDocument();
        }
    }
}
