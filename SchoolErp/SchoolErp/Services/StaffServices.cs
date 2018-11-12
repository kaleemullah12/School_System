using SchoolErp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SchoolErp.Services
{
    public class StaffServices
    {
        InvictusSchoolEntities db = new InvictusSchoolEntities();
        public void AddStaff(Staff rec)
        {
            db.Staffs.Add(rec);
            db.SaveChanges();
        }

        public object List()
        {
            var obj = db.Staffs.ToList().Select(x => new { x.Staff_Id, x.Name, x.Cell_Number, x.CNIC, x.Address, x.Detail,x.Designation_Id,x.Salary,x.DOB,x.Qualification.Qualification1,x.Gender});

            return obj;
        }
    }
}