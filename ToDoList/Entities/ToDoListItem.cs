using System.ComponentModel.DataAnnotations;

namespace ToDoList.Entities
{
    public class ToDoListItem
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }

    }
}