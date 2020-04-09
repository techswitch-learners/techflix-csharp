using Microsoft.AspNetCore.Mvc;
using TechFlixApi.Models.Response;
using TechFlixApi.Services;

namespace TechFlixApi.Controllers
{
    [ApiController]
    [Route("films")]
    public class FilmsController : ControllerBase
    {
        private readonly IFilmsService _filmsService;
        private readonly IPeopleService _peopleService;

        public FilmsController(IFilmsService filmsService, IPeopleService peopleService)
        {
            _filmsService = filmsService;
            _peopleService = peopleService;
        }

        [HttpGet("")]
        public ActionResult<ResultList<Film>> GetFilms()
        {
            return _filmsService.GetFilms();
        }

        [HttpGet("popular")]
        public ActionResult<ResultList<Film>> GetPopularFilms()
        {
            return _filmsService.GetFilms();
        }

        [HttpGet("recommended")]
        public ActionResult<ResultList<Film>> GetRecommendedFilms()
        {
            return _filmsService.GetFilms();
        }

        [HttpGet("{id}")]
        public ActionResult<Film> GetFilm([FromRoute] int id)
        {
            return _filmsService.GetFilm(id);
        }

        [HttpGet("{id}/cast")]
        public ActionResult<ResultList<Person>> GetCast([FromRoute] int id)
        {
            return _peopleService.GetCastForFilm(id);
        }
        
        [HttpGet("{id}/similar")]
        public ActionResult<ResultList<Film>> GetSimilar([FromRoute] int id)
        {
            return _filmsService.GetFilms();
        }
    }
}