using SchoolErp.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SchoolErp.Models;

namespace SchoolErp.Services
{
    public class Cl_SecService
    {
        InvictusSchoolEntities db = new InvictusSchoolEntities();
        public void Save(Class_SectionVM Rec)
        {
            var clasid = Rec.Classid;
            var sec_list = Rec.SectionList;
            foreach(var item in sec_list)
            {
                var VM = new Cl_Sec
                {
                   Class_Id=clasid,
                   Sec_Id=item.Section_Id
                };
                db.Cl_Sec.Add(VM);
                db.SaveChanges();
            }
        

        }

    }
}