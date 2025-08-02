using Microsoft.EntityFrameworkCore;
namespace ToDoList.Entities
{
    public class ToDoListDbContext : DbContext
    {
        public ToDoListDbContext(DbContextOptions<ToDoListDbContext> options) : base(options)
        {
        }

        public DbSet<ToDoListItem> ToDoListItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ToDoListItem>().HasKey(i => i.Id);
            modelBuilder.Entity<ToDoListItem>().Property(i => i.Name).IsRequired();
        }

    }
}