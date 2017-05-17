using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace taskirli.Controllers
{

    //[Authorize]
    [RoutePrefix("api/test")]
    public class TestController : ApiController
    {
        [Route("getTestData")]
        public HttpResponseMessage GetTestData()
        {
            return Request.CreateResponse(HttpStatusCode.OK, new {message = "Test success!" });
        }

    }
}
