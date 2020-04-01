using System.Collections.Generic;

namespace TechFlixApi.Models.Response
{
    public class FeaturedItems
    {
        public IEnumerable<Feature> Features { get; set; }
    }

    public class Feature
    {
        public string ImageUrl { get; set; }
        public string LinkUrl { get; set; }
    }
}