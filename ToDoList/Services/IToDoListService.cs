using ToDoList.Entities;

namespace ToDoList.Services
{
    public interface IToDoListService
    {
        Task AddListItem(ToDoListItem item);
        Task RemoveListItem(ToDoListItem item);
        Task<List<ToDoListItem>> GetAllItems();


    }
}