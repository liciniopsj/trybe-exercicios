using funcionarios;

namespace ProjetoPOO {
  class Program{
    static void Main(string[] args) {
      Funcionario Funcionario = new Funcionario("Danilo", "Instrutor", 12);
      bool isRaiseble = Funcionario.VeririficarElegibilidadeAumento(Funcionario.Salario);
      Funcionario.Nome = "Rahel";
      decimal salarioAnual = Funcionario.CalcularSalarioAnual();

      List<Funcionario> listaFuncionarios = new List<Funcionario>();
      listaFuncionarios.Add(Funcionario);

      Gerente gerente = new Gerente("Julia", "Coordenadora", 5000);
      listaFuncionarios.Add(gerente);

      Console.WriteLine($"Salário anual: R$ {salarioAnual}");
      Console.WriteLine($"Pode ter o salario aumentado? " + isRaiseble);
    }
  }
}