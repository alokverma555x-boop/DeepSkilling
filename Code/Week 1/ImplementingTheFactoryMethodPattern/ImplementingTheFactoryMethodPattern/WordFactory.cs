using System;
using System.Collections.Generic;
using System.Text;

namespace ImplementingTheFactoryMethodPattern
{
    public class WordFactory : DocumentFactory
    {
        public override IDocument CreateDocument()
        {
            return new WordDocument();
        }
    }
}
