using System.Linq;
using TechFlixApi.Models.Catelogue;
using TechFlixApi.Models.Response;

namespace TechFlixApi.Services
{
    public interface IFilmsService
    {
        ResultList<Film> GetFilms();
        Film GetFilm(int id);
    }
    
    public class FilmsService : IFilmsService
    {
        private readonly ICatalogueService _catalogueService;
        private readonly IMetadataService _metadataService;
        private readonly IReviewsService _reviewsService;

        public FilmsService(ICatalogueService catalogueService, IMetadataService metadataService, IReviewsService reviewsService)
        {
            _catalogueService = catalogueService;
            _metadataService = metadataService;
            _reviewsService = reviewsService;
        }

        public ResultList<Film> GetFilms()
        {
            var catalogueFilms = _catalogueService.GetFilms();
            var films = catalogueFilms.Select(PopulateFilm).ToList(); return new ResultList<Film>(films);
        }

        public Film GetFilm(int id)
        {
            var catalogueFilm = _catalogueService.GetFilm(id);
            return PopulateFilm(catalogueFilm);
        }

        private Film PopulateFilm(CatalogueFilm catalogueFilm)
        {
            var metadataFilm = _metadataService.GetFilm(catalogueFilm.Id);
            var filmReviews = _reviewsService.GetFilmReviews(catalogueFilm.Id);
            return Film.Create(catalogueFilm, metadataFilm, filmReviews);
        }
    }
}