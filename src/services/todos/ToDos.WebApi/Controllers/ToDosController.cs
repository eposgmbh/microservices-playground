using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;

using ToDos.Model;

using Swashbuckle.AspNetCore.SwaggerGen;

namespace ToDos.WebApi.Controllers
{
    /// <summary> ToDos V1 Controller </summary>
    [Route("api/v1/[controller]")]
    [Produces("application/json")]
    public class ToDosController : Controller
    {
        private readonly IToDoRepository myToDoRepository;

        /// <summary> Creates an instance of the <b>ToDosController</b> class. </summary>
        /// <param name="toDoRepository"> ToDo repository </param>
        public ToDosController(IToDoRepository toDoRepository) {
            myToDoRepository = toDoRepository;
        }

        /// <summary> Gets all ToDos. </summary>
        /// <returns> All ToDos </returns>
        /// <response code="200"> Success. </response>
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<ToDo>), 200)]
        [SwaggerOperation(nameof(GetAllToDos))]
        public Task<IEnumerable<ToDo>> GetAllToDos() => myToDoRepository.GetAllAsync();

        /// <summary> Gets a ToDo by id. </summary>
        /// <param name="id"> ToDo id </param>
        /// <returns> ToDo </returns>
        /// <response code="200"> The ToDo is found. </response>
        /// <response code="404"> The ToDo is not found. </response>
        [HttpGet("{id}", Name = nameof(GetToDoById))]
        [ProducesResponseType(typeof(ToDo), 200)]
        [ProducesResponseType(404)]
        [SwaggerOperation(nameof(GetToDoById))]
        public async Task<IActionResult> GetToDoById(string id) {
            ToDo theToDo = await myToDoRepository.GetByIdAsync(id);
            if (theToDo == null) {
                return NotFound();
            }

            return new ObjectResult(theToDo);
        }

        /// <summary> Adds a ToDo. </summary>
        /// <param name="toDo"> ToDo </param>
        /// <returns> ToDo </returns>
        /// <response code="201"> The ToDo is created. </response>
        [HttpPost]
        [ProducesResponseType(201)]
        [SwaggerOperation(nameof(AddToDo))]
        public async Task<IActionResult> AddToDo([FromBody] ToDo toDo) {
            await myToDoRepository.AddAsync(toDo);

            return CreatedAtRoute(nameof(GetToDoById), new { id = toDo.Id }, toDo);
        }

        /// <summary> Deletes a ToDo. </summary>
        /// <param name="id"> ToDo id </param>
        /// <returns> ToDo </returns>
        /// <response code="204"> The ToDo is deleted. </response>
        /// <response code="404"> The ToDo is not found. </response>
        [HttpDelete("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        [SwaggerOperation(nameof(DeleteToDo))]
        public async Task<IActionResult> DeleteToDo(string id) {
            if (await myToDoRepository.DeleteAsync(id)) {
                return NoContent();
            }

            return NotFound();
        }


        /// <summary> Updates a ToDo. </summary>
        /// <param name="id"> ToDo id </param>
        /// <param name="toDo"> ToDo </param>
        /// <returns> ToDo </returns>
        /// <response code="204"> The ToDo is updated. </response>
        /// <response code="400"> The specified id is not the ToDo's id. </response>
        /// <response code="404"> The ToDo is not found. </response>
        [HttpPut("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [SwaggerOperation(nameof(UpdateToDo))]
        public async Task<IActionResult> UpdateToDo(string id, [FromBody] ToDo toDo) {
            if (id != toDo.Id) {
                return BadRequest();
            }

            if (await myToDoRepository.UpdateAsync(toDo)) {
                return NoContent();
            }

            return NotFound();
        }
    }
}
