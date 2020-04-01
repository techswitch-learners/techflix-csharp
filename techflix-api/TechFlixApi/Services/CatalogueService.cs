using System;
using System.Collections;
using System.Collections.Generic;
using RestSharp;
using TechFlixApi.Models.Catelogue;

namespace TechFlixApi.Services
{
    public interface ICatalogueService
    {
        IEnumerable<CatalogueFilm> GetFilms();
        IEnumerable<CataloguePerson> GetPeople();
        CatalogueFilm GetFilm(int id);
        CataloguePerson GetPerson(int id);
    }
    
    public class CatalogueService : ICatalogueService
    {
        private readonly RestClient _client;

        public CatalogueService()
        {
            _client = new RestClient(Environment.GetEnvironmentVariable("URL_INTERNAL_CATALOGUE"));
        }

        public IEnumerable<CatalogueFilm> GetFilms()
        {
            var request = new RestRequest("/films");
            return _client.Get<List<CatalogueFilm>>(request).Data;
        }

        public IEnumerable<CataloguePerson> GetPeople()
        {
            var request = new RestRequest("/people");
            return _client.Get<List<CataloguePerson>>(request).Data;
        }

        public CatalogueFilm GetFilm(int id)
        {
            var request = new RestRequest($"/films/{id}");
            return _client.Get<CatalogueFilm>(request).Data;
        }

        public CataloguePerson GetPerson(int id)
        {
            var request = new RestRequest($"/people/{id}");
            return _client.Get<CataloguePerson>(request).Data;
        }
    }
}