using System;
using System.Collections.Generic;
using System.Text;

namespace ImplementingTheFactoryMethodPattern
{
    public abstract class DocumentFactory
    {
        public abstract IDocument CreateDocument();

        public void ProcessDocument()
        {
            var doc = CreateDocument();
            doc.Open();
            doc.Save();
        }
    }
}
