//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SchoolErp.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Staff_Attendence
    {
        public int S_Attendence_Id { get; set; }
        public int Staff_Id { get; set; }
        public System.DateTime Date { get; set; }
        public string Status { get; set; }
    
        public virtual Staff Staff { get; set; }
    }
}