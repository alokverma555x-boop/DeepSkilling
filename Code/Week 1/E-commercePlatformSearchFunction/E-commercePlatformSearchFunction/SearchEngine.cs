using System;
using System.Collections.Generic;
using System.Text;

namespace E_commercePlatformSearchFunction
{
    public class SearchEngine
    {
        public static Product LinearSearch(Product[] products, int targetId)
        {
            for (int i = 0; i < products.Length; i++)
            {
                if (products[i].ProductId == targetId)
                {
                    return products[i]; 
                }
            }
            return null;
        }

        public static Product BinarySearch(Product[] sortedProducts, int targetId)
        {
            int left = 0;
            int right = sortedProducts.Length - 1;

            while (left <= right)
            {
                int mid = left + (right - left) / 2;

                if (sortedProducts[mid].ProductId == targetId)
                {
                    return sortedProducts[mid];
                }

                if (sortedProducts[mid].ProductId < targetId)
                {
                    left = mid + 1;
                }
                else
                {
                    right = mid - 1;
                }
            }

            return null; 
        }
    }
}
