//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace taskirli.DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class TenantFeedback
    {
        public int Id { get; set; }
        public Nullable<int> ItemId { get; set; }
        public Nullable<int> TenantId { get; set; }
        public System.DateTime StartDate { get; set; }
        public System.DateTime EndDate { get; set; }
        public Nullable<int> ReturnItemCondtionRate { get; set; }
        public Nullable<int> TenantCommunicationRate { get; set; }
        public string FeedBackData { get; set; }
    
        public virtual Account Account { get; set; }
        public virtual Item Item { get; set; }
    }
}