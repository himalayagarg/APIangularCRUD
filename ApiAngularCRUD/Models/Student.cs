namespace ApiAngularCRUD.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Student")]
    public partial class Student
    {
        [Key]
        public int StudentId { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        public int? RollNumber { get; set; }
        
        [StringLength(50)]
        public string Class { get; set; }

        [StringLength(50)]
        public string Section { get; set; }
    }
}
