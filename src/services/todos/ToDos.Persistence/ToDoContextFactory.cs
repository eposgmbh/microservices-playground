using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

using Npgsql.EntityFrameworkCore;

namespace ToDos.Persistence
{
    public class ToDoContextFactory : IDesignTimeDbContextFactory<ToDoContext>
    {
        public ToDoContext CreateDbContext(string[] args) {
            var optionsBuilder = new DbContextOptionsBuilder<ToDoContext>();
            optionsBuilder.UseNpgsql("Server=localhost;Database=todos;User ID=postgres;Password=JklM8765");

            return new ToDoContext(optionsBuilder.Options);
        }
    }
}
