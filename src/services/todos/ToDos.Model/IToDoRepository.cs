using System.Collections.Generic;
using System.Threading.Tasks;

namespace ToDos.Model
{
    public interface IToDoRepository
    {
        Task<IEnumerable<ToDo>> GetAllAsync();

        Task AddAsync(ToDo toDo);

        Task<ToDo> GetByIdAsync(string id);

        Task<bool> DeleteAsync(string id);

        Task<bool> UpdateAsync(ToDo toDo);
    }
}
