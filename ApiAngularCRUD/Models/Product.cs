namespace ApiAngularCRUD.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Product")]
    public partial class Product
    {
        [Key]
        public int ProductId { get; set; }

        [Required]
        [StringLength(50)]
        public string ModelNumber { get; set; }

        [StringLength(100)]
        public string Description { get; set; }
        
        public DateTime? ExpireDate { get; set; }
    }
}
