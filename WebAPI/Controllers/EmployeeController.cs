using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using WebAPI.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using System.Net.Mail;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public EmployeeController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select Id, UserName, Password, Name, Email, Contact, Department, Type, Status, PhotoFileName,
                    convert(varchar(10),DateOfJoining,120) as DateOfJoining,
                    convert(varchar(10),CreatedAt,120) as CreatedAt
                    from dbo.Employee
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }


        [HttpPost]
        public JsonResult Post(Employee emp)
        {
            string query = @"
                    insert into dbo.Employee 
                    (UserName, Password, Name, Email, Contact, Department, Type, Status, PhotoFileName, DateOfJoining, CreatedAt)
                    values 
                    (
                    '" + emp.UserName + @"'
                    ,hashbytes('md5', '" + emp.Password + @"')
                    ,'" + emp.Name + @"'
                    ,'" + emp.Email + @"'
                    ,'" + emp.Contact + @"'
                    ,'" + emp.Department + @"'
                    ,'employee'
                    ,'inactive'
                    ,'" + emp.PhotoFileName + @"'
                    ,'" + emp.DateOfJoining + @"'
                    ,CURRENT_TIMESTAMP
                    )
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
                string To = emp.Email;
                string name = emp.Name;
                string UserName = emp.UserName;
                string Password = emp.Password;
                string Subject = "Welcome to Hidden Coder Employee Management System";
                string Body = "Hello " + name + " \n Your login credentials: " + "\n User Name:" + UserName + "\n Password:" + Password + "\n\n Please do not share your credentials to others.";
                MailMessage mm = new MailMessage();
                mm.To.Add(To);
                mm.Subject = Subject;
                mm.Body = Body;
                mm.From = new MailAddress("hiddencoder1@gmail.com");
                mm.IsBodyHtml = false;
                SmtpClient smtp = new SmtpClient("smtp.gmail.com");
                smtp.Port = 587;
                smtp.UseDefaultCredentials = true;
                smtp.EnableSsl = true;
                smtp.Credentials = new System.Net.NetworkCredential("hiddencoder1@gmail.com", "angulargmit21");
                smtp.Send(mm);
            }

            return new JsonResult("Credentials Mailed to the created Employee's Email.");
        }


        [HttpPut]
        public JsonResult Put(Employee emp)
        {
            string query = @"update dbo.Employee set UserName = '" + emp.UserName + @"', Name = '" + emp.Name + @"', Email = '" + emp.Email + @"', Contact = '" + emp.Contact + @"', Department = '" + emp.Department + @"', Status = '" + emp.Status + @"', DateOfJoining = '" + emp.DateOfJoining + @"', PhotoFileName = '" + emp.PhotoFileName + @"' where Id = " + emp.Id + @" ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }


        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                    delete from dbo.Employee
                    where Id = " + id + @" 
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }


        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/Photos/" + filename;

                using(var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(filename);
            }
            catch (Exception)
            {

                return new JsonResult("anonymous.png");
            }
        }


        [Route("GetAllDepartmentNames")]
        public JsonResult GetAllDepartmentNames()
        {
            string query = @"
                    select DepartmentName from dbo.Department
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }


    }
}
