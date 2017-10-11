using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleApi
{
  public static class Data
  {
    public static List<Event> Events { get; set; }

    static Data()
    {
      var rand = new Random();
      Events = Enumerable.Range(1, 10).Select(x => new Event { Id = x, Description = "description de l'event " + x, Name = "Event " + x, Percentage = rand.Next(0, 100) }).ToList();
    }
  }
}
