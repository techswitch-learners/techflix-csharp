using OpenQA.Selenium;

namespace SeleniumTests
{
    public static class TestExtensions
    {
        public static IWebElement FindElementByTestId(this IWebDriver driver, string testId)
        {
            return driver.FindElement(By.XPath($"//*[@data-test-id='{testId}']"));
        }
    }
}