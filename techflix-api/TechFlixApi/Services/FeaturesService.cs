using System.Collections.Generic;
using TechFlixApi.Models.Response;

namespace TechFlixApi.Services
{
    public interface IFeaturesService
    {
        FeaturedItems GetFeatures();
    }
    
    public class FeaturesService: IFeaturesService
    {
        public FeaturedItems GetFeatures()
        {
            return new FeaturedItems
            {
                Features = new List<Feature>
                {
                    DummyFeature(), DummyFeature(), DummyFeature(), DummyFeature(), DummyFeature()
                }
            };
        }

        private Feature DummyFeature()
        {
            return new Feature
            {
                ImageUrl = "https://via.placeholder.com/1600x900.png",
                LinkUrl = "/films/1726"
            };
        }
    }
}