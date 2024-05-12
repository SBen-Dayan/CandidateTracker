using CandidateTracker.Data;
using CandidateTracker.Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CandidateTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatesController : ControllerBase
    {
        private readonly string _conStr;

        public CandidatesController(IConfiguration configuration)
        {
            _conStr = configuration.GetConnectionString("conStr");
        }

        [HttpGet("getDeclined")]
        public List<Candidate> GetDeclined() => new CandidateRepository(_conStr).Get(Status.Declined);

        [HttpGet("getPending")]
        public List<Candidate> GetPending() => new CandidateRepository(_conStr).Get(Status.Pending);

        [HttpGet("getConfirmed")]
        public List<Candidate> GetConfirmed() => new CandidateRepository(_conStr).Get(Status.Confirmed);

        [HttpGet("getById")]
        public Candidate Get(int id) => new CandidateRepository(_conStr).Get(id);

        [HttpGet("getStatusCounts")]
        public StatusCounts GetStatusCounts()
        {
            var repo = new CandidateRepository(_conStr);
            return new StatusCounts
            {
                Pending = repo.GetStatusCount(Status.Pending),
                Confirmed = repo.GetStatusCount(Status.Confirmed),
                Declined = repo.GetStatusCount(Status.Declined)
            };
        }

        [HttpPost("add")]
        public void Insert(Candidate candidate) => new CandidateRepository(_conStr).Insert(candidate);

        [HttpPost("confirm")]
        public void Confirm(CandidateIdModel idModel) => new CandidateRepository(_conStr).UpdateStatus(idModel.Id, Status.Confirmed);

        [HttpPost("decline")]
        public void Decline(CandidateIdModel idModel) => new CandidateRepository(_conStr).UpdateStatus(idModel.Id, Status.Declined);
    }
}
