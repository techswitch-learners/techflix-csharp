using System;
using RestSharp;
using TechFlixApi.Models.Reviews;

namespace TechFlixApi.Services
{
    public interface IReviewsService
    {
        FilmReviews GetFilmReviews(int id);
    }
    
    public class ReviewsService : IReviewsService
    {
        private readonly RestClient _client;

        public ReviewsService()
        {
            _client = new RestClient(Environment.GetEnvironmentVariable("URL_INTERNAL_REVIEWS"));
        }
        
        public FilmReviews GetFilmReviews(int id)
        {
            var request = new RestRequest($"/reviews/{id}");
            return _client.Get<FilmReviews>(request).Data;
        }
    }
}