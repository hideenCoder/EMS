using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Mail
    {
        public string Subject { get; set; }
        public string Message { get; set; }
        public string To { get; set; }
    }
}
