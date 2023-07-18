using System;
using Microsoft.AspNetCore.Mvc;
using petshop;

namespace Aula3.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //api/pet
    public class PetController : ControllerBase
    {
        private static List<Pet> pets = new()
        {
            new Pet { Id = 1, Name = "Max", Breed = "Labrador Retriever", Age = 3},
            new Pet { Id = 2, Name = "Bella", Breed = "Golden Retriever", Age = 2}
        };

        [HttpGet]
        public ActionResult GetPets() {
            return Ok(pets);
        }

        [HttpGet("{id}")]
        public ActionResult GetPetById(int id) {
            Pet? pet = pets.Find(p => p.Id == id);
            if (pet == null) {
                return NotFound();
            }

            return Ok(pet);
        }

        [HttpPost]
        public ActionResult PostPet([FromBody] Pet pet){
            pets.Add(pet);
            return Created("", pet);
        }

        [HttpPut("{id}")]
        public ActionResult UpdatePet(int id, [FromBody] Pet pet){
            Pet? existingPet = pets.Find(p => p.Id == id);
            if (existingPet == null) {
                return NotFound();
            }

            existingPet.Name = pet.Name;
            existingPet.Breed = pet.Breed;
            existingPet.Age = pet.Age;

            return NoContent();

        } 

        [HttpDelete("{id}")]
        public ActionResult DetelePet(int id){
            Pet? pet = pets.Find(p => p.Id == id);
            if (pet == null) {
                return NotFound();
            }
            pets.Remove(pet);
            return NoContent();
        }
    }
}