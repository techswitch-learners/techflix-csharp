using FluentAssertions;
using NUnit.Framework;
using OpenQA.Selenium.Chrome;

namespace SeleniumTests
{
    public class HomepageTest
    {
        [Test]
        public void TestHomePageLoads()
        {
            using var driver = new ChromeDriver();
            driver.Navigate().GoToUrl("http://localhost:3000/");

            var heroTitle = driver.FindElementByTestId("hero-title");

            heroTitle.Text.Should().Be("Welcome!");
        }
    }
}