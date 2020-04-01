using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace TechFlixApi.Controllers
{
    [ApiController]
    [Route("")]
    public class HomeController : ControllerBase
    {
        [HttpGet("")]
        public ActionResult<IEnumerable<string>> GetEndpoints()
        {
            return new List<string>
            {
                "/films",
                "/films/{id}",
                "/people",
                "/people/{id}"
            };
        }
    }
}