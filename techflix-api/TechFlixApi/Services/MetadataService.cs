using System;
using RestSharp;
using TechFlixApi.Models.Metadata;

namespace TechFlixApi.Services
{
    public interface IMetadataService
    {
        FilmMetadata GetFilm(int id);
        PersonMetadata GetPerson(int id);
    }
    
    public class MetadataService : IMetadataService
    {
        private readonly RestClient _client;

        public MetadataService()
        {
            Console.WriteLine(Environment.GetEnvironmentVariable("URL_INTERNAL_METADATA"));
            _client = new RestClient(Environment.GetEnvironmentVariable("URL_INTERNAL_METADATA"));
        }

        public FilmMetadata GetFilm(int id)
        {
            var request = new RestRequest($"/films/{id}");
            return _client.Get<FilmMetadata>(request).Data;
        }

        public PersonMetadata GetPerson(int id)
        {
            var request = new RestRequest($"/people/{id}");
            return _client.Get<PersonMetadata>(request).Data;
        }
    }
}