using Aula3.Web.Controllers;
using petshop;

namespace Aula3.Test;

public class UnitTest1
{
    [Fact]
    public void GetPets_IsReturningPets()
    {
        PetController petController = new();
        
        List<Pet> pets = new()
        {
            new Pet { Id = 1, Name = "Max", Breed = "Labrador Retriever", Age = 3},
            new Pet { Id = 2, Name = "Bella", Breed = "Golden Retriever", Age = 2}
        };


        // incomplete, waiting for teacher to find mock solution
    }
}