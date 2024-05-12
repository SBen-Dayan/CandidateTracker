using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CandidateTracker.Data
{
    public class CandidateRepository
    {
        private readonly string _connectionString;

        public CandidateRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Candidate> Get(Status status)
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == status).ToList();
        }

        public Candidate Get(int id)
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }

        public int GetStatusCount(Status status)
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Count(c => c.Status == status);
        }

        public void Insert(Candidate candidate)
        {
            using var context = new CandidateDataContext(_connectionString);
            context.Candidates.Add(candidate);
            context.SaveChanges();
        }

        public void UpdateStatus(int id, Status status)
        {
            using var context = new CandidateDataContext(_connectionString);
            context.Database.ExecuteSqlInterpolated($"UPDATE Candidates SET Status = {status} WHERE Id = {id}");
        }
    }
}
