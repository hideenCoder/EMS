
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Contact { get; set; }
        public string Department { get; set; }
        public string Type { get; set; }
        public string Status { get; set; }
        public string PhotoFileName { get; set; }
        public string DateOfJoining { get; set; }
        public string CreatedAt { get; set; }

    }
}
