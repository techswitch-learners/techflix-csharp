using System.Collections;
using System.Collections.Generic;

namespace TechFlixApi.Models.Metadata
{
    public class PersonMetadata
    {
        public string Birthday { get; set; }
        public string KnownForDepartment { get; set; }
        public string Name { get; set; }
        public string Biography { get; set; }
        public double Popularity { get; set; }
        public string PlaceOfBirth { get; set; }
        public string ProfilePath { get; set; }
        public string HomePage { get; set; }
        public IEnumerable<string> AlsoKnownAs { get; set; }
    }
}