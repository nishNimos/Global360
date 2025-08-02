using Microsoft.AspNetCore.Mvc;
using ToDoList.Entities;
using ToDoList.Services;


namespace ToDoList.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToDoListController : ControllerBase
    {
        private readonly ILogger<ToDoListController> _logger;
        private readonly IToDoListService _listService;

        public ToDoListController(ILogger<ToDoListController> logger, IToDoListService listService)
        {
            _logger = logger;
            _listService = listService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllItems()
        {
            var items = await _listService.GetAllItems();
            _logger.LogInformation("Retrieved {Count} items from the to-do list.", items.Count);
            return Ok(items);
        }
        [HttpPost]
        public async Task<IActionResult> AddListItem([FromBody] ToDoListItem item)
        {
            await _listService.AddListItem(item);
            return Ok();
        }
        [HttpDelete]
        public async Task<IActionResult> RemoveListItem(int id)
        {
            var item = new ToDoListItem { Id = id };
            await _listService.RemoveListItem(item);
            return Ok();
        }

    }
}