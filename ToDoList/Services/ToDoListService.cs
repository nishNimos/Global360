using Microsoft.EntityFrameworkCore;
using ToDoList.Entities;

namespace ToDoList.Services
{
    public class ToDoListService : IToDoListService
    {
        private readonly ToDoListDbContext dbContext;
        public ToDoListService(ToDoListDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task AddListItem(ToDoListItem item)
        {
            await dbContext.ToDoListItems.AddAsync(item);
            await dbContext.SaveChangesAsync();
        }
        public async Task RemoveListItem(ToDoListItem item)
        {
            dbContext.ToDoListItems.Remove(item);
            await dbContext.SaveChangesAsync();
        }
        public async Task<List<ToDoListItem>> GetAllItems()
        {
            return await dbContext.ToDoListItems.ToListAsync();
        }
    }
}