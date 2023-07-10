namespace funcionarios {
  class Funcionario {
    public static bool VeririficarElegibilidadeAumento(decimal salario){
      return salario < 2000;
    }

// propriedades

// campos
    private string nome;
    private string cargo;
    private string salario;

// getters and setters
    public string Nome {get; set;}
    public string Cargo {get; set;}
    public decimal Salario {get; set;}

// construtor
    public Funcionario(string nome, string cargo, decimal salario) {
      this.Nome = nome;
      this.Cargo = cargo;
      this.Salario = salario;
    }

    public decimal CalcularSalarioAnual() {
      return this.Salario * 12;
    }
  
  }

    class Gerente : Funcionario
    {
        public Gerente(string nome, string cargo, decimal salario) : base(nome, cargo, salario)
        {

        }

        public float calcularSalarioDeFuncionarios(Funcionario[] funcionarios){
          return funcionarios.Length;
        }
    }

    struct Coordinate {
      public double x;
      public double y;

    public Coordinate(double x, double y) {
      this.x = x;
      this.y = y;
    }
  }

  enum PaymentType {
    Credit = 0,
    Debit = 1
  }
}