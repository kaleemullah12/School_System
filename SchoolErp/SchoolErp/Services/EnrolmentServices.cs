using SchoolErp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SchoolErp.Services
{
    public class EnrolmentServices
    {

        InvictusSchoolEntities db = new InvictusSchoolEntities();
        public void Student_Enrolment(Student_Enrolment rec)
        {
            db.Student_Enrolments.Add(rec);
            db.SaveChanges();
        }
        public object StudentEnrolmentList()
        {
            var obj = db.Student_Enrolments.ToList().Select(x => new {  StudentName =  x.Student_Record.Name, ClassName = x.Class.Name, SectionName= x.Section.Name,StaffName=x.Staff.Name, x.Session_Start, x.Session_End });

            return obj;

        }
    }
}