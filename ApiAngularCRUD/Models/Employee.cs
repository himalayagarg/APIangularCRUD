using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.Spatial;

namespace ApiAngularCRUD.Models
{
    [Table("Employee")]
    public class Employee
    {
        [Key]
        public int EmployeeId { get; set; }

        [Required]
        [StringLength(100)]
        public string FullName { get; set; }

        [StringLength(100)]
        public string Email { get; set; }
    }
}