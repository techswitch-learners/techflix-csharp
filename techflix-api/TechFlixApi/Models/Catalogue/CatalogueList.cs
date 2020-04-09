using System.Collections;
using System.Collections.Generic;

namespace TechFlixApi.Models.Catelogue
{
    public class CatalogueList<T>
    {
        public int Count { get; set; }
        public IEnumerable<T> Items { get; set; }
    }
}