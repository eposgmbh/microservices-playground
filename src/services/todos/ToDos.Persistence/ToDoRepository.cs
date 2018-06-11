using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

using ToDos.Model;

namespace ToDos.Persistence
{
    public class ToDoRepository : IToDoRepository
    {
        private readonly ToDoContext myContext;

        public ToDoRepository(ToDoContext context) {
            myContext = context;
        }

        public async Task<IEnumerable<ToDo>> GetAllAsync() {
            return await myContext.ToDos.ToListAsync();
        }

        public async Task AddAsync(ToDo toDo) {
            myContext.ToDos.Add(toDo);
            await myContext.SaveChangesAsync();
        }

        public async Task<ToDo> GetByIdAsync(string id) {
            var theToDos =
                from theToDo in myContext.ToDos
                where theToDo.Id == id
                select theToDo;

            return await theToDos.SingleOrDefaultAsync();
        }

        public async Task<bool> DeleteAsync(string id) {
            ToDo theToDo = await GetByIdAsync(id);
            if (theToDo == null) {
                return false;
            }

            myContext.ToDos.Remove(theToDo);
            await myContext.SaveChangesAsync();

            return true;
        }

        public async Task<bool> UpdateAsync(ToDo toDo) {
            ToDo theToDo = await GetByIdAsync(toDo.Id);
            if (theToDo == null) {
                return false;
            }

            theToDo.Text = toDo.Text;
            theToDo.Done = toDo.Done;
            theToDo.UserId = toDo.UserId;
            theToDo.Updated = toDo.Updated;

            myContext.ToDos.Update(theToDo);
            await myContext.SaveChangesAsync();

            return true;
        }
    }
}
