using System;
using System.Collections.Generic;
using System.Text;

namespace E_commercePlatformSearchFunction
{
    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string Category { get; set; }

        public override string ToString()
        {
            return $"[{ProductId}] {ProductName} ({Category})";
        }
    }
}
