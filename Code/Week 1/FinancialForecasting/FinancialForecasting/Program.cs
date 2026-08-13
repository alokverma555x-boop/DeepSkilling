using System;

namespace FinancialForecasting
{
    class Program
    {
        static void Main(string[] args)
        {
            decimal initialInvestment = 10000m; 
            decimal annualGrowthRate = 0.05m;   
            int yearsToForecast = 5;

            Console.WriteLine($"Calculating forecast for {yearsToForecast} years...");

            decimal futureValue = CalculateFutureValue(initialInvestment, annualGrowthRate, yearsToForecast);

            Console.WriteLine($"Predicted Value: {futureValue:C}"); 
        }

        static decimal CalculateFutureValue(decimal presentValue, decimal growthRate, int totalYears)
        {
            decimal currentValue = presentValue;

            for (int i = 0; i < totalYears; i++)
            {
                currentValue *= (1 + growthRate);
            }

            return currentValue;
        }
    }
}