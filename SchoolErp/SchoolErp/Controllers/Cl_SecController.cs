using SchoolErp.Models;
using SchoolErp.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SchoolErp.Services;

namespace SchoolErp.Controllers
{
    public class Cl_SecController : Controller
    {
        Cl_SecService service = new Cl_SecService();
        InvictusSchoolEntities db = new InvictusSchoolEntities();
        // GET: Cl_Sec
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Create()
        {
            var sec_list = db.Sections.ToList();
            ViewBag.sc = sec_list;
            var cal_list = db.Classes.ToList();
            ViewBag.cl = cal_list;
            return View();
        }
        [HttpPost]
        public JsonResult Save(Class_SectionVM rec)
        {
            service.Save(rec);
            return Json(new { msg="Save"},JsonRequestBehavior.AllowGet);
        }
    }
}