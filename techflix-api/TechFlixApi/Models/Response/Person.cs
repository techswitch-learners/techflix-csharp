using TechFlixApi.Models.Catelogue;
using TechFlixApi.Models.Metadata;

namespace TechFlixApi.Models.Response
{
    public class Person
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string DateOfBirth { get; set; }
        public string PlaceOfBirth { get; set; }
        public string KnownFor { get; set; }
        public string Biography { get; set; }
        public double Popularity { get; set; }
        public string ProfileImageUrl { get; set; }
        public string HomePage { get; set; }
        
        public static Person Create(CataloguePerson cataloguePerson, PersonMetadata personMetadata)
        {
            return new Person
            {
                Id = cataloguePerson.Id,
                Name = personMetadata.Name,
                DateOfBirth = personMetadata.Birthday,
                PlaceOfBirth = personMetadata.PlaceOfBirth,
                KnownFor = personMetadata.KnownForDepartment,
                Biography = personMetadata.Biography,
                Popularity = personMetadata.Popularity,
                ProfileImageUrl = $"https://image.tmdb.org/t/p/original/{personMetadata.ProfilePath}",
                HomePage = personMetadata.HomePage,
            };
        }
    }
}