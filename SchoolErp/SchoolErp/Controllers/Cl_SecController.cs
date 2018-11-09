using SchoolErp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SchoolErp.Controllers
{
    public class Cl_SecController : Controller
    {
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
    }
}