using Microsoft.AspNetCore.Mvc;
using TechFlixApi.Models.Response;
using TechFlixApi.Services;

namespace TechFlixApi.Controllers
{
    [ApiController]
    [Route("featured")]
    public class FeaturedConroller : ControllerBase
    {
        private readonly IFeaturesService _featuresService;

        public FeaturedConroller(IFeaturesService featuresService)
        {
            _featuresService = featuresService;
        }

        [HttpGet("")]
        public ActionResult<FeaturedItems> GetFeatures()
        {
            return _featuresService.GetFeatures();
        }
    }
}