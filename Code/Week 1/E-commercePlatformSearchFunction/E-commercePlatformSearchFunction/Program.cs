using E_commercePlatformSearchFunction;
using System;

Console.WriteLine("--- E-Commerce Search Optimization ---");

Product[] inventory = new Product[]
{
    new Product { ProductId = 101, ProductName = "Wireless Mouse", Category = "Electronics" },
    new Product { ProductId = 205, ProductName = "Mechanical Keyboard", Category = "Electronics" },
    new Product { ProductId = 340, ProductName = "Coffee Mug", Category = "Home" },
    new Product { ProductId = 412, ProductName = "Desk Lamp", Category = "Office" },
    new Product { ProductId = 599, ProductName = "Gaming Monitor", Category = "Electronics" }
};

int targetId = 412;

Console.WriteLine($"\nPerforming Linear Search for Product ID: {targetId}...");
Product linearResult = SearchEngine.LinearSearch(inventory, targetId);
Console.WriteLine(linearResult != null ? $"Found: {linearResult}" : "Product not found.");

Console.WriteLine($"\nPerforming Binary Search for Product ID: {targetId}...");
Product binaryResult = SearchEngine.BinarySearch(inventory, targetId);
Console.WriteLine(binaryResult != null ? $"Found: {binaryResult}" : "Product not found.");

Console.ReadLine();