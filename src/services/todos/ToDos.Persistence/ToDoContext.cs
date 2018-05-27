using System;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.ValueGeneration;

using ToDos.Model;

namespace ToDos.Persistence
{
    public class ToDoContext : DbContext
    {
        public ToDoContext(DbContextOptions<ToDoContext> options) : base(options) { }

        public DbSet<ToDo> ToDos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder
                .HasDefaultSchema("todos")
                .Entity<ToDo>().Property(n => n.Id).HasValueGenerator<IdValueGenerator>();
        }

        private class IdValueGenerator : ValueGenerator
        {
            public override bool GeneratesTemporaryValues => false;

            protected override object NextValue(EntityEntry entry) {
                return Guid.NewGuid().ToString();
            }
        }
    }
}
