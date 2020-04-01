using TechFlixApi.Models.Catelogue;
using TechFlixApi.Models.Metadata;
using TechFlixApi.Models.Reviews;

namespace TechFlixApi.Models.Response
{
    public class Film
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string HeroImageUrl { get; set; }
        public string PosterImageUrl { get; set; }
        public long Budget { get; set; }
        public string HomePage { get; set; }
        public string Synopsis { get; set; }
        public string ReleaseDate { get; set; }
        public long Revenue { get; set; }
        public int Runtime { get; set; }
        public string Tagline { get; set; }
        
        public static Film Create(CatalogueFilm catalogueFilm, FilmMetadata metadataFilm, FilmReviews filmReviews)
        {
            return new Film
            {
                Id = catalogueFilm.Id,
                Title = metadataFilm.Title,
                HeroImageUrl = $"https://image.tmdb.org/t/p/original/{metadataFilm.BackdropPath}",
                PosterImageUrl = $"https://image.tmdb.org/t/p/original/{metadataFilm.PosterPath}",
                Budget = metadataFilm.Budget,
                HomePage = metadataFilm.HomePage,
                Synopsis = metadataFilm.Synopsis,
                ReleaseDate = metadataFilm.ReleaseDate,
                Revenue = metadataFilm.Revenue,
                Runtime = metadataFilm.Runtime,
                Tagline = metadataFilm.Tagline,
            };
        }
    }
}