using System.Collections.Generic;

namespace TechFlixApi.Models.Response
{
    public class ResultList<T>
    {
        public IEnumerable<T> Items { get; set; }
        
        public ResultList(IEnumerable<T> items)
        {
            Items = items;
        }
    }
}