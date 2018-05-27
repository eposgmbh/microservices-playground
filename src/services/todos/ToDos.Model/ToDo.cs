using System;

namespace ToDos.Model
{
    public class ToDo
    {
        public string Id { get; set; }

        public string Text { get; set; }

        public bool Done { get; set; }

        public string UserId { get; set; }

        public DateTime Updated { get; set; } = DateTime.Now;
    }
}
