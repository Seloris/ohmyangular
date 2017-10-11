using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;

namespace SimpleApi.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            var bearer = this.Request.Headers["Authorization"];
            if (bearer.Count == 0 || bearer[0].Contains("old_token"))
            {
                HttpContext.Response.HttpContext.Features.Get<IHttpResponseFeature>().ReasonPhrase = "Expired token";
                return Unauthorized();
            }
            return Ok(Data.Events);
        }

    [HttpPost]
    public IActionResult Post(Event eventModel)
    {
      var bearer = this.Request.Headers["Authorization"];
      if (bearer.Count == 0 || bearer[0].Contains("old_token"))
      {
        HttpContext.Response.HttpContext.Features.Get<IHttpResponseFeature>().ReasonPhrase = "Expired token";
        return Unauthorized();
      }
      Data.Events.Add(eventModel);
      return Ok(bool);
    }
  }
}
