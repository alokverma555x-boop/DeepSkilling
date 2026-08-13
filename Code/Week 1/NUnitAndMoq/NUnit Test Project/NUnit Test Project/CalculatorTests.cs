using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using CalcLibrary;

namespace NUnit_Test_Project
{
    [TestFixture]
    public class CalculatorTests
    {
        private Calculator _calculator;

        [SetUp]
        public void Setup()
        {
            _calculator = new Calculator();
        }

        [TearDown]
        public void TearDown()
        {
            _calculator = null;
        }

        [Test]
        public void Add_SimpleValues_ReturnsSum()
        {
            int a = 5;
            int b = 10;
            int expected = 15;
            int actual = _calculator.Add(a, b);
            Assert.That(actual, Is.EqualTo(expected));
        }

        [TestCase(1, 2, 3)]
        [TestCase(-1, 1, 0)]
        [TestCase(100, 200, 300)]
        public void Add_MultipleInputs_ReturnsCorrectSum(int a, int b, int expected)
        {
            int actual = _calculator.Add(a, b);
            Assert.That(actual, Is.EqualTo(expected));
        }
    }
}
