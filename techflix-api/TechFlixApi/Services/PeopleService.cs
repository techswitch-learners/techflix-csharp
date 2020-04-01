using System.Linq;
using TechFlixApi.Models.Catelogue;
using TechFlixApi.Models.Response;

namespace TechFlixApi.Services
{
    public interface IPeopleService
    {
        ResultList<Person> GetPeople();
        Person GetPerson(int id);
    }
    
    public class PeopleService : IPeopleService
    {
        private readonly ICatalogueService _catalogueService;
        private readonly IMetadataService _metadataService;

        public PeopleService(IMetadataService metadataService, ICatalogueService catalogueService)
        {
            _catalogueService = catalogueService;
            _metadataService = metadataService;
        }

        public ResultList<Person> GetPeople()
        {
            var people = _catalogueService.GetPeople().Select(PopulatePerson);
            return new ResultList<Person>(people);
        }

        public Person GetPerson(int id)
        {
            var person = _catalogueService.GetPerson(id);
            return PopulatePerson(person);
        }

        private Person PopulatePerson(CataloguePerson cataloguePerson)
        {
            var personMetadata = _metadataService.GetPerson(cataloguePerson.Id);
            return Person.Create(cataloguePerson, personMetadata);
        }
    }
}