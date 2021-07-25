using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class About
    {
        public int Id { get; set; }

        public string Overview { get; set; }
        public string Spirit { get; set; }

        public string CreatedAt { get; set; }
    }
}
